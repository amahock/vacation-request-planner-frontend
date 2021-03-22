import React from "react";
import { Switch,Route,useHistory,useLocation } from "react-router-dom";
import { routes } from "../Routes/routes";
import "../Styles/Manager.css";
import AddNewEmployee from "./AddNewEmployee";
import SignupPage from "./SignupPage";
import GetEmployeeDetailsPage from "./GetEmployeeDetailsPage";
import DisplayEmployeeDetails from "./DisplayEmployeeDetails";

const ManagerPage = () =>{

    const history = useHistory();

    return(
        <div className="d-flex flex-row bd-highlight">
            <div className="d-flex flex-column">
                
                <div className="p-2">
                    <button
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="button"
                        onClick={() => history.push(routes.manager)}
                        >
                        Home
                    </button>
                </div>
                
                <div className="p-2">
                    <button
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="button"
                        onClick={() => history.push(routes.addEmployee)}
                        >
                        Add New employee
                    </button>
                </div>
                <div className="p-2">
                    <button
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="button"
                        onClick={() => history.push("/manager/getEmployee/update")}
                        >
                        Update Employee Details
                    </button>
                </div>
                <div className="p-2">
                    <button
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="button"
                        onClick={() => history.push("/manager/getEmployee/delete")}
                        >
                        Delete Employee
                    </button>
                </div>
                {/* <div class="p-2 bd-highlight">Flex item 3</div> */}
            </div>
            
            <div className="flex-grow-1">
                <Switch>
                    <Route exact path={routes.manager}>
                        <div className="p-2 font-weight-bold text-danger">
                            Manager's Home page display here...!!!!
                            Should display the pending approval request here!!!
                        </div>
                    </Route>
                    <Route path={routes.addEmployee}>
                        <AddNewEmployee/>
                    </Route>
                    <Route path={routes.getEmployee}>
                        <GetEmployeeDetailsPage/>
                    </Route>
                    <Route path={routes.updateEmployee}>
                        <DisplayEmployeeDetails action="update"/>
                    </Route>
                    <Route path={routes.deleteEmployee}>
                        <DisplayEmployeeDetails action="delete"/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default ManagerPage;