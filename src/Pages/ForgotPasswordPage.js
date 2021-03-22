import React, { useState, Fragment } from "react";
import networkRequests from "../Utils/networkRequests";
// import { NavLink } from "reactstrap";
import {Link} from "react-router-dom";
import FormLayout from "../Components/FormLayout";
import { routes } from "../Routes/routes";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState();
  const [showError, setShowError] = useState(false);
  const [messageFromServer, setMessageFromServer] = useState("");
  const [showNullError, setShowNullError] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);

  const updateEmail = event => {
    setEmail(event.target.value);
  };

  const sendEmail = event => {
    event.preventDefault();
    setShowError(false);
    setMessageFromServer("");
    setShowNullError(false);
    setSendingEmail(false);
    if (email === "") {
      setShowError(false);
      setMessageFromServer("");
      setShowNullError(true);
    } else {
      setSendingEmail(true);
      networkRequests(routes.forgotPassword, "POST", { email })
        .then(response => {
          console.log(response.data);
          if (response.data === "email sent") {
            console.log("mail sent sucess");
            setShowError(false);
            setMessageFromServer("email sent");
            setShowNullError(false);
            // setSendingEmail(false);
          } else if (response.data === "email not in db") {
            // console.log("email not present" + response.data);
            setShowError(true);
            setMessageFromServer("");
            setShowNullError(false);
            setSendingEmail(false);
          }
        })
        .catch(error => {
          console.log("error message from server" + error);
        });
    }
  };

  const formContent = [
    <div key="formContent-forgotPasswordPage">
      <form className="form-signin" onSubmit={sendEmail}>
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
        <button
          className="btn btn-lg btn-primary btn-block text-uppercase"
          type="submit"
        >
          Send Password Reset Email
        </button>
        <hr className="my-4" />
        <div>
        {sendingEmail && messageFromServer === "" ? (
          <div className="">
            <h4>Sending email. Please wait....</h4>
            <span className="spinner-border text-info"></span>
          </div>
        ) : null}
        {showNullError && (
          <div>
            <p>The email address cannot be null.</p>
          </div>
        )}
        {showError && (
          <div>
            <h4 className="errorMsg">
              That email address isn&apos;t recognized. Please try again or
              register for a new account.
            </h4>
            <Link to={routes.signUp}>Signup</Link>
          </div>
        )}
        {messageFromServer === "email sent" && (
          <div className="text-success">
            <h3>Password Reset Email Successfully Sent!</h3>
          </div>
        )}
        <Link to={routes.home}>Go Home</Link>
      </div>
      </form>
    </div>
  ];
  return (
    <Fragment>
      <FormLayout heading="Forgot Password" formContent={formContent} />

    </Fragment>
  );
};

export default ForgotPasswordPage;
