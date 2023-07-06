// "use server";
import "@styles/globals.css";
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
          <main className="app">{children}</main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
