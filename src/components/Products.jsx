import React, { useEffect } from "react";
import { useState } from "react";
import {
  Card,
  Button,
  Nav,
  Form,
  FormControl,
  CardGroup,
  OverlayTrigger,
  Tooltip,
  Popover,
} from "react-bootstrap";
import dummyImg from "../images/dummyImg.png";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart";
import addToCartImg from "../images/add-to-cart.png";

const products = [
  {
    id: 1,
    name: "Kettle",
    description: "drink hot water",
    price: 1600,
    qty: 1,
  },
  { id: 2, name: "Apple", description: "good for health", price: 20, qty: 1 },
  {
    id: 3,
    name: "Complan",
    description: "health drink,good for health",
    price: 282,
    qty: 1,
  },
  {
    id: 4,
    name: "plastic Bottle",
    description: "store  water",
    price: 60,
    qty: 1,
  },
  { id: 5, name: "Banana", description: "good for health", price: 20, qty: 1 },
  { id: 6, name: "Milk", description: "drink hot", price: 45, qty: 1 },
  {
    id: 7,
    name: "Ferrero Rocher Moments,(Box of 24 Units), 139.2 g",
    description: "chocolate",
    price: 1000,
    qty: 1,
  },
  {
    id: 8,
    name: "Hershey's Creamy Milk Chocolate Bar, 40g (Pack of 8)",
    description: "drink hot water",
    price: 600,
    qty: 1,
  },
  {
    id: 9,
    name: "Horlicks",
    description: "drink hot water",
    price: 280,
    qty: 1,
  },
  {
    id: 10,
    name: "Hp laptop",
    description: "drink hot water",
    price: 56000,
    qty: 1,
  },
  {
    id: 11,
    name: "acer laptop",
    description: "drink hot water",
    price: 54000,
    qty: 1,
  },
];

const Products = () => {
  const [searchItem, setSearchItem] = useState("");
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setcartItems(
        cartItems.map((x) => (x.id === product.id ? { ...exist } : x))
      );
    } else {
      setcartItems([...cartItems, { ...product }]);
    }
  };
  const addedpopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Added !</Popover.Title>
    </Popover>
  );
  console.log(cartItems);
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" expanded>
        <Navbar.Brand href="#home">Shopiee</Navbar.Brand>
        <Nav defaultActiveKey="/products" className="mr-auto">
          <Nav.Link href={"/"}>Home</Nav.Link>
          <Nav.Link href={"/products"} className="navbarlink">
            Products
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href={"/cart"}>My Cart({cartItems.length})</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(event) => {
              setSearchItem(event.target.value);
            }}
          />
        </Form>
      </Navbar>
      <br />
      <div className="product_page">
        <CardGroup>
          {products
            .filter((val) => {
              if (searchItem == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return val;
              }
            })
            .map((product, id) => (
              <div className="product_list" key={id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Img
                      className="product_image"
                      variant="top"
                      src={dummyImg}
                    />
                    <Card.Title className="product_title">
                      {product.name}
                    </Card.Title>
                    <Card.Text className="product_desc">
                      {product.description}
                    </Card.Text>
                    <OverlayTrigger
                      trigger="focus"
                      placement="right"
                      overlay={addedpopover}
                    >
                      <input
                        type="image"
                        onClick={() => addToCart(product)}
                        src={addToCartImg}
                        alt="add_to_cart"
                      />
                    </OverlayTrigger>
                    <Card.Text className="product_price">
                      ₹ {product.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </CardGroup>
      </div>

      <div className="footer">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Shopiee</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href={"/"} className="navbarlink">Home</Nav.Link>
          <Nav.Link href={"/products"}>Products</Nav.Link>
        </Nav>
        <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      </Navbar>
      </div>
      
    </div>
  );
};
export default Products;
