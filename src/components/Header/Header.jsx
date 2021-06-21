import React from "react";
import { Link } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import "./Header.css";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ orderList, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(user);

  return (
    <div className="header__container">
      <Link to="/" className="header__logo">
        <span className="header__logoFirst">Snack</span>
        <span className="header__logoSecond">Store</span>
      </Link>
      <div className="header__nav">
        <span style={{ marginRight: "0.5rem" }}>{user?.email}</span>
        <Link to={!user ? "/login" : "/"} className="header__navOption">
          <span onClick={login}>{user ? "Sign Out" : "Sign In"}</span>
        </Link>
        <Link to="/checkout" className="header__navCart">
          <LocalMallIcon className="header__cartIcon" />

          <span className="header__cartText">Orders</span>
          <span className="header__cardNumber">
            {orderList && orderList.length}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
