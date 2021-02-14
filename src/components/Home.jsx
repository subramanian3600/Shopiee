import React from "react";
import { Card, Button,Nav ,Navbar,Form,FormControl ,CardGroup} from "react-bootstrap";
import Footer from './Cart';

const Home = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Shopiee</Navbar.Brand>
        <Nav defaultActiveKey="/" className="mr-auto">
          <Nav.Link href={"/"} className="navbarlink">Home</Nav.Link>
          <Nav.Link href={"/products"}>Products</Nav.Link>
          <Nav.Link href={"/credits"}>Credits</Nav.Link>
        </Nav>
        </Navbar>
        <div className="construction">
          Home is Under Construction...<br />
          <a href={"/products"}><Button>View Products</Button></a>
        </div>
    </div>
  );
};
export default Home;
