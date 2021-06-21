import React from "react";
import "./Home.css";
import ListingGrid from "../ListingsGrid/ListingsGrid";
import FavoriteIcon from "@material-ui/icons/Favorite";
import data from "../../data.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__cover">
        <div className="home__container">
          <h1>Your favorite food, cooked by Snackstore</h1>
          <div className="home__options">
            <input
              type="text"
              placeholder="Search for your favorite food"
              className="home__search"
            />
            <button>Find Food</button>
          </div>
        </div>
      </div>
      {data && data.map((item, i) => <ListingGrid key={i} data={item} />)}
      <div className="home__footer">
        <div className="home__footerLogo">
          <Link to="/" className="footer__logo">
            <span className="footer__logoFirst">Snack</span>
            <span className="footer__logoSecond">Store</span>
          </Link>
        </div>
        <div className="home__footerleft">
          <span>
            Built with <FavoriteIcon /> by Sahil
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
