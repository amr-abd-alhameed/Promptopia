"use client";import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { singIn, singOut, useSessions, getProviders } from "next-auth/react";
import logo from "@public/assets/images/logo.svg";

const Nav = () => {
  const isUserLogged = true;
  const [provider, setProvider] = useState(null);
  useEffect(() => {
    const setProvider = async () => {
      const response = await getProvider();
      setProvider(response);
    };
    setProvider();
  }, []);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex-center flex gap-2">
        <Image
          src={logo}
          alt="Promptopia image"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      <div className="hidden sm:flex">
        {isUserLogged ? (
          <div className="gap-3 md:gap-5 flex">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={() => {}} className="outline_btn">
              {" "}
              Sign Out
            </button>

            <Link href="profile">
              <Image
                src={logo}
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile Image"
              />
            </Link>
          </div>
        ) : (
          <>
            {provider &&
              Object.values(provider).map((provider) => {
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => singIn(provider.id)}
                  className="black_btn"
                >
                  Sing In
                </button>;
              })}
          </>
        )}
      </div>
      <div className="relative flex sm:hidden">
        {isUserLogged ? (
          <div className="flex">
            {" "}
            <Image
              src={logo}
              width={37}
              height={37}
              className="rounded-full"
              alt="Profile Image"
              onClick={() => {
                setToggleDropdown((prev) => !prev);
              }}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    singOut();
                  }}
                  className="black_btn mt-5 w-full "
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {provider &&
              Object.values(provider).map((provider) => {
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => singIn(provider.id)}
                  className="black_btn"
                >
                  Sing In
                </button>;
              })}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
