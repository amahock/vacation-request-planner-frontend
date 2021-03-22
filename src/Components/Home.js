import React, { Fragment,useState, useContext, useEffect } from "react";
import {useHistory} from "react-router-dom";
import "../Styles/App.css";
import {routes} from "../Routes/routes";
import {userContext} from "../Context/Context";
import Axios from "axios";

const Home = () =>{
    const history = useHistory();
    const user = useContext(userContext);

  return(

      <div className="row home">
        <div className="col-md-8 offset-md-2">
            <h1 className="font-weight-bold font-italic">Welcome to Vacation Request Planner !!!</h1>
            <h3 className="font-weight-bold text-danger">Please login to proceed further</h3>
        </div>
      </div>

  )
    
}

export default Home;
