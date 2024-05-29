// components/Layout.tsx
import React from "react";
import NavBarPage from "../Navbar/page";
import Footerpage from "../Footer/page";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBarPage />
      <main>{children}</main>
      <Footerpage />
    </>
  );
};

export default Layout;
