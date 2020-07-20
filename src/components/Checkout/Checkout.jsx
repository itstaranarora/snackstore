import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider";
import CheckoutCard from "./CheckoutCard";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const [{ orderList }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {orderList?.length === 0 ? (
          <h2>Your Order List is Empty</h2>
        ) : (
          <h2>Your Order List</h2>
        )}
        <div className="checkout__products">
          {orderList?.map((item) => (
            <CheckoutCard
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              img={item.img}
              price={item.price}
            />
          ))}
        </div>
      </div>
      {orderList?.length !== 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
