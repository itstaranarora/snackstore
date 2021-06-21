import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/" className="login__logo">
        <span className="login__logoFirst">Snack</span>
        <span className="login__logoSecond">Store</span>
      </Link>
      <div className="login__container">
        <h3>Welcome back</h3>
        <p>Sign in with your email</p>
        <form className="login__form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <div className="login__buttonOptions">
            <button type="submit" onClick={login} className="login__Signin">
              Sign In
            </button>
            <button onClick={signup} className="login__Signup">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
