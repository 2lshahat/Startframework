import React, { Component } from "react";
import { Navbar } from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid p-0">
          <Outlet />
        </div>

        <Footer />
      </>
    );
  }
}
