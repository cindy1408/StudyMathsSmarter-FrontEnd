import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthenticationService from "../service/AuthenticationService";
import "font-awesome/css/font-awesome.min.css";
import "./Login.css";
import { useDispatch } from "react-redux";
import { getUserFromDB } from "../redux/getUserSlice";
import NavBar from "./NavBar";

const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasLoginFailed, setHasLoginFailed] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onUsernameChange = (evt) => {
    evt.preventDefault();
    setUsername(evt.target.value);
  };

  const onPasswordChange = (evt) => {
    evt.preventDefault();
    setPassword(evt.target.value);
  };

  const loginClicked = () => {
    AuthenticationService.executeAuthenticationService(username, password)
      .then(() => {
        dispatch(getUserFromDB({ username: username, password: password }));
        history.push("/profile");
      })
      .catch(() => {
        setShowSuccessMessage(false);
        setHasLoginFailed(true);
        setUsername("");
        setPassword("");
      });
  };

  return (
    <div className="login-background">
      <button
        onClick={() => history.push("/homePage")}
        className="login-home-button"
      >
        {" "}
        {"Home"}
      </button>
      <div className="login-container">
        <form className="form-container sign-in-form">
          <h1 className="login-heading">Login</h1>
          <div class="social-container">
            <a href="#">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa fa-google"></i>
            </a>
          </div>
          {/* <span className="spans">or use your account</span> */}
          <input
            type="text"
            placeholder="Email"
            name="username"
            value={username}
            onChange={onUsernameChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onPasswordChange}
          />
          <div className="post-submit">
            {hasLoginFailed && <div>Invalid email or password</div>}
            {showSuccessMessage && <div>Login Sucessful</div>}
          </div>
          <a className="forgot-password" href="#">
            Forgot your password?
          </a>

          <button className="ghost2" onClick={loginClicked}>
            Login
          </button>
        </form>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, there!</h1>
              <h4>Sign up with us to practice for your exams</h4>
              <button className="ghost">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
