import React from "react";
import "./Card.css";
import { useStateValue } from "../../StateProvider";

function Card({ title, category, img, price, id }) {
  const [, dispatch] = useStateValue();

  const addToOrder = () => {
    dispatch({
      type: "ADD_TO_ORDERLIST",
      item: {
        id,
        title,
        category,
        img,
        price,
      },
    });
  };

  return (
    <div className="card">
      <div className="card__image">
        <img src={img} alt="Listing pic" />
      </div>
      <div className="card__text">
        <div className="card__textTitle">
          <h3>{title}</h3>
          <div className="card__info">
            <span>{"₹ " + price}</span>
          </div>
        </div>
        <div className="card__button">
          <button onClick={addToOrder}>Add to order</button>
        </div>
      </div>
      <div className="card__textLower">
        <span>{category}</span>
      </div>
    </div>
  );
}

export default Card;
