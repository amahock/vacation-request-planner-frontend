import React,{useState,useEffect} from "react";
import { Switch,Route,useHistory,useLocation } from "react-router-dom";
import "./Styles/App.css";
import "./Styles/loginPage.css";
// import "./Styles/Calendar.css";
import {userContext} from "./Context/Context";
import NavBar from "./Components/NavBar";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
// import networkRequests from "./Utils/networkRequests";
import VerifyEmailPage from "./Pages/VerifyEmailPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import ManagerPage from "./Pages/ManagerPage";
import {routes} from "./Routes/routes";
import Home from "./Components/Home";
import EmployeeHomePage from "./Pages/EmployeeHomePage";
import EmployeePage from "./Pages/EmployeePage";
import Calendar from "./Components/Calendar";


const App = ()=>{

  // const history = useHistory();
  // const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role,setRole] = useState("");

  // useEffect(() => {
  //   console.log("resumeDetails variable value in App component's useEffect method");
  //   console.log(resumeDetails);
  //   networkRequests("/user/isLoggedIn")
  //     .then(response => {
  //       if (response.loggedInStatus) {
  //         setIsLoggedIn(true);   
  //       } else {
  //         setIsLoggedIn(false);
  //       }
  //     })
  //     .catch(error => {
  //       setIsLoggedIn(false);
  //     });
  // }, []);
  
  return(
    <userContext.Provider value={{ isLoggedIn, setIsLoggedIn,role,setRole}}>
    <div >
        <NavBar/> 
      <div>
      <Switch>
            <Route exact path={routes.home}>
              <Home/>
            </Route>
            <Route path={routes.signUp}>
              <SignupPage />
            </Route>
            <Route path={routes.signUpVerify}>
              <VerifyEmailPage />
            </Route>
            <Route path={routes.forgotPassword}>
              <ForgotPasswordPage />
            </Route>
            <Route path={routes.resetPassword}>
              <ResetPasswordPage />
            </Route>
            <Route path={routes.login}>
              <LoginPage />
            </Route>
            <Route path={routes.manager}>
              <ManagerPage />
            </Route>
            <Route path={routes.employee}>
              <EmployeePage/>
            </Route>
            </Switch>
            </div>
    </div>
    </userContext.Provider>
  )
}

export default App;