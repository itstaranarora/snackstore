import React from "react";
import "./Home.css";
import ListingGrid from "../ListingsGrid/ListingsGrid";
import data from "../../data.json";

function Home() {
  return (
    <div className="home">
      <div className="home__cover">
        <div className="home__container">
          <h1>Your favorite food, cooked by Snackstore</h1>
          {/* <div className="home__options">
            <input type="text" className="home__search" />
            <button>Find Food</button>
          </div> */}
        </div>
      </div>
      {data && data.map((item, i) => <ListingGrid key={i} data={item} />)}
    </div>
  );
}

export default Home;
