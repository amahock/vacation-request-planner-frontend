import React, { Fragment } from "react";
import {useHistory,Switch,Route} from "react-router-dom";
import Calendar from "../Components/Calendar";
import {routes} from "../Routes/routes";
// import "../Styles/Calendar.css";

const EmployeeHomePage = () => {

    const history = useHistory();

    return (

       <div>
                <Calendar/>
        </div>
            
       
    )
}

export default EmployeeHomePage;