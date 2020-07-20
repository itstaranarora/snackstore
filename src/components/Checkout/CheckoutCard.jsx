import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { useStateValue } from "../../StateProvider";

function CheckoutCard({ title, img, category, price, id }) {
  const [, dispatch] = useStateValue();
  const removeFromOrder = () => {
    dispatch({
      type: "REMOVE_FROM_ORDERLIST",
      id: id,
    });
  };
  console.log(id);
  return (
    <div className="checkout__card">
      <div className="checkout__cardImg">
        <img src={img} alt={title + ".jpg"} />
      </div>
      <div className="checkout__cardInfo">
        <div className="checkout__cardHeader">
          <h3>{title}</h3>
          <span className="checkout__cardPrice">{"₹ " + price}</span>
        </div>
        <div className="checkout__cardBody">
          <span className="checkout__cardCategory">{category}</span>
          <ClearIcon
            onClick={removeFromOrder}
            className="checkout__cardCross"
          />
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
