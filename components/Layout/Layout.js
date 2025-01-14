import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, className }) => {
  const { pathname } = useRouter();
  return (
    <div className="flex flex-col min-h-screen justify-between ">
      {pathname === "/sign-up" ||
      pathname === "/sign-in" ||
      pathname === "/choose-test" ? null : (
        <Header className={className} />
      )}
      <main
        className={`${className} text-white  flex justify-center items-center flex-1`}
      >
        {children}{" "}
      </main>
      {(pathname === "/sign-up") | (pathname === "/sign-in") ||
      pathname === "/choose-test" ? null : (
        <Footer className={className} />
      )}
    </div>
  );
};

export default Layout;
