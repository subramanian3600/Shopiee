import React from "react";
import { Button , Alert } from "react-bootstrap";

const TotalSum = (props) => {
  console.log(props);
  const ProceedToCheckout = () => {
    alert("coming soon");
  }
  const FindSum = () => {
    return props.cart.reduce((sum, { price , qty }) => sum + price *qty, 0);
  };
  return (
    <div className="summary_div">
      <h3 className="summary">Summary:</h3>
      {props.cart.map((item, key) => (
        <p className="summary_item" key={key}>{item.name} * {item.qty} : ₹ {item.price * item.qty}</p>
      ))}
      <hr />
      <p className="summary_total">Total:₹{FindSum()}</p>
      <Button className="proceedToCheckOut" variant="success" size="lg" onClick={() => ProceedToCheckout()}>
        Proceed to Checkout
      </Button>
    </div>
  );
};
export default TotalSum;
