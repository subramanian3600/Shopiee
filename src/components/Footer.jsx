import React from "react";
import {Navbar,Nav} from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Navbar.Brand href="#home">Shopiee</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href={"/"} className="navbarlink">Home</Nav.Link>
          <Nav.Link href={"/products"}>Products</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Footer;
