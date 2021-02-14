import React from "react";
import { useState } from "react";
import { Navbar, Nav, CardGroup, Card, Button, Form } from "react-bootstrap";
import dummyImg from "../images/dummyImg.png";
import TotalSum from "./TotalSum";

var storedcartItems = localStorage.getItem("cartItems");
var retrivestoredcartItems = JSON.parse(storedcartItems || "[]");

const Cart = (props) => {
  const datas = Object.values(retrivestoredcartItems);
  const [cart, setCart] = useState(retrivestoredcartItems);
  const ClearCart = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  const RemoveFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item !== itemToRemove));
  };
  let ItemCount = cart.length;
  const IncrementItem = (item) => {
    let newCart=[...cart];
    const itemincart=newCart.find(
      (it)=>item.name===it.name);
      if(itemincart){
        if(itemincart.qty>=1){
          itemincart.qty++;
        }
      }else{
        itemincart={
          ...item,
          qty:1,
        };
        newCart.push(itemincart)
      }
      setCart(newCart);
    }
    const DecrementItem = (item) => {
      let newCart=[...cart];
      const itemincart=newCart.find(
        (it)=>item.name===it.name);
        if(itemincart){
          if(itemincart.qty>1){
            itemincart.qty--;
          }
        }else{
          itemincart={
            ...item,
            qty:1,
          };
          newCart.push(itemincart)
        }
        setCart(newCart);
      }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Shopiee</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href={"/"}>Home</Nav.Link>
          <Nav.Link href={"/products"}>Products</Nav.Link>
        </Nav>
      </Navbar>
      <div className="my_cart_title">
        🛒Cart ({ItemCount})
        <br />
        {cart.length > 0 && (
          <Button variant="primary" size="sm" onClick={() => ClearCart()}>
            Clear Cart
          </Button>
        )}
        {cart.length > 0 &&(
          <TotalSum cart={cart} />
        )}
        <div className="product_page_cart">
          <CardGroup>
            {cart.map((item, key) => (
              <div className="product_list" key={key}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Img
                      className="product_image"
                      variant="top"
                      src={dummyImg}
                    />
                    <Card.Title className="product_title">
                      {item.name}
                    </Card.Title>
                    <Card.Text className="product_desc">
                      {item.description}
                    </Card.Text>

                    <Card.Text className="product_price">
                      ₹ {item.price}
                    </Card.Text>
                    <Button variant="primary" size='sm' onClick={()=>IncrementItem(item)}>+</Button>
                    <Card.Text id={item.id} className="product_qty">Qty : {item.qty}</Card.Text>
                    <Button variant="primary" size='sm'  onClick={()=>DecrementItem(item)}>-</Button>
                    <br />
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => RemoveFromCart(item)}
                    >
                      x
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </CardGroup>
        </div>
      </div>
      {cart.length === 0 && (
        <div className="cart_is_empty">
          Cart is empty <br />
          <Button variant="primary" size="sm" href={"/products"}>
            Show Now !
          </Button>
        </div>
      )}
      </div>
  );
};

export default Cart;
