import "@styles/globals.css";
import Provider from "@components/Provider";
import Nav from "@components/Nav";

const RootLayout = ({ children }) => {
  const metadata = {
    title: "Promptopia",
    description: "Discover And Share AI Prompts ",
  };
  return (
    <>
      <html lang="en">
        <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
