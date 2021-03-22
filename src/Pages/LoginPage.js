import React, { useState, useContext} from "react";
import "../Styles/loginPage.css";
// import { Button, Form, FormGroup, Label, Input, NavLink } from "reactstrap";
import { useHistory } from "react-router-dom";
import networkRequests from "../Utils/networkRequests";
import { userContext } from "../Context/Context";
import FormLayout from "../Components/FormLayout";
import { routes } from "../Routes/routes";

const LoginPage = props => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const user = useContext(userContext);

  const history = useHistory();

  const updateEmail = event => {
    setEmail(event.target.value);
  };

  const updatePassword = event => {
    setPassword(event.target.value);
  };

  const formSubmit = event => {
    event.preventDefault();
    setErrorMessage("");
    networkRequests("/user/login", "POST", { email, password })
      .then(response => {
        if(response.status !== "email not verified"){
        user.setIsLoggedIn(true);
        localStorage.setItem("jwtToken", response.jwtToken);
        const name = JSON.stringify(response.name);
        history.push(routes.home, { usrname: name });
        } else {
          user.setIsLoggedIn(false);
          setErrorMessage("Email Address is not verified. Please verify your email address!!!");
        }
      })
      .catch(error => {
        user.setIsLoggedIn(false);
        setErrorMessage("***Invalid username and password!!!");
      });
  };

  const formContent = [
    <div key="formContentLoginPage">
      <form className="form-signin" onSubmit={formSubmit}>
        <div className="form-label-group">
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            onChange={updateEmail}
            required
            autoFocus
          />
          <label htmlFor="inputEmail">Email address</label>
        </div>

        <div className="form-label-group">
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            onChange={updatePassword}
            required
          />
          <label htmlFor="inputPassword">Password</label>
        </div>

        <div className="custom-control custom-checkbox mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember password
          </label>
        </div>
        <button
          className="btn btn-lg btn-primary btn-block text-uppercase"
          type="submit"
        >
          Sign in
        </button>

        <hr className="my-4" />
        <button
          className="btn btn-lg btn-primary btn-block text-uppercase"
          type="button"
          onClick={() => history.push(routes.forgotPassword)}
        >
          Forgot Password
        </button>
        <hr className="my-4" />
        <div className="errorMsg">{errorMessage}</div>
      </form>
    </div>
  ];

    return <FormLayout heading="Login" formContent={formContent} />;

};

export default LoginPage;
