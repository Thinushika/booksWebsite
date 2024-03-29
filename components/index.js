import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Structure = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Structure;
