// components/Layout.tsx
import React from "react";
import NavBarPage from "../Navbar/page";
import Footerpage from "../Footer/page";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white/5">
      <NavBarPage />
      <main>{children}</main>
      <Footerpage />
    </div>
  );
};

export default Layout;
