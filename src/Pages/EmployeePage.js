import React from "react";
import {Switch,Route,useHistory} from "react-router-dom";
import Calendar from "../Components/Calendar";
import {routes} from "../Routes/routes";


const EmployeePage = () =>{
    const history = useHistory();

    return (
        <div>
            <div className="d-flex flex-row">
                
                <div className="flex-fill">
                    <button
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="button"
                        onClick={() => history.push(routes.employee)}
                        >
                        Home
                    </button>
                </div>
                
                <div className="flex-fill">
                    <button
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="button"
                        onClick={() => history.push(routes.viewAllRequests)}
                        >
                        View All Requests
                    </button>
                </div>
                <div className="flex-fill">
                    <button
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="button"
                        onClick={() => history.push(routes.viewPendingRequests)}
                        >
                        View Pending Requests
                    </button>
                </div>
                </div>
                <div className="">
                    <Switch>
                        <Route exact path={routes.employee}>
                            <Calendar/>
                        </Route>
                        <Route path={routes.viewAllRequests}>
                            <div className="text-danger">Here is to display the requests content</div>
                        </Route> 
                        <Route path={routes.viewPendingRequests}>
                            <div>Here is to display the requests content</div>
                        </Route> 
                    </Switch>
                </div>
            </div>
            
    )
}

export default EmployeePage;