import React from "react";
import Header from "./header";
import Footer from "./footer";

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
