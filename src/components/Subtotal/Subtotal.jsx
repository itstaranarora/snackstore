import React from "react";
import "./Subtotal.css";
import { getOrderTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";

function Subtotal() {
  const [{ orderList }] = useStateValue();
  const subTotal = getOrderTotal(orderList);
  const tax = (subTotal * 7) / 100;
  const serviceCharges = (subTotal * 5) / 100;
  const totalAmount = subTotal + tax + serviceCharges;
  return (
    <div className="subtotal">
      <div className="subtotal__header">
        <h3>Summery</h3>
      </div>
      <div className="subtotal__body">
        <div className="subtotal__text1">
          <span>Subtotal</span>
          <span>{"₹" + subTotal.toFixed(2)}</span>
        </div>
        <div className="subtotal__text2">
          <span>Tax</span>
          <span>{"+ ₹" + tax.toFixed(2)}</span>
        </div>
        <div className="subtotal__text3">
          <span>Service Fee</span>
          <span>{"+ ₹" + serviceCharges.toFixed(2)}</span>
        </div>
      </div>
      <div className="subtotal__total">
        <h4>Total</h4>
        <h4>{"₹" + totalAmount.toFixed(2)}</h4>
      </div>
      <form></form>
      <a href="https://paytm.me/W-nxXjB" className="subtotal__button">
        Approve and pay
      </a>
    </div>
  );
}

export default Subtotal;
