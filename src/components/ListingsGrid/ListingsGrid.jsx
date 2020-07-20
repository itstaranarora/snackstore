import React, { useRef } from "react";
import "./ListingsGrid.css";
import Listing from "../Listing/Listing";
import Card from "../Card/Card";

function ListingsGrid({ data: { title, data } }) {
  const grid = useRef(null);
  return (
    <div className="listingsGrid">
      <Listing grid={grid} title={title} />
      <div ref={grid} className="listingsGrid__grid">
        <div className="listingsGrid__col">
          {data &&
            data
              .slice(0, 3)
              .map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  category={item.category}
                  img={item.img}
                  price={item.price}
                  id={item.id}
                />
              ))}
        </div>
        <div className="listingsGrid__col">
          {data &&
            data
              .slice(3, 6)
              .map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  category={item.category}
                  img={item.img}
                  price={item.price}
                  id={item.id}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default ListingsGrid;
