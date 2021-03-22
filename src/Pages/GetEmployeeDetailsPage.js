import React,{useState,useContext,Fragment} from "react";
import {useHistory,useParams} from "react-router-dom";
import FormLayout from "../Components/FormLayout";
import {userContext} from "../Context/Context";
import { routes } from "../Routes/routes";

const GetEmployeeDetailsPage = () =>{

    const {action} = useParams();

    const history = useHistory();

    const user = useContext(userContext);

    const [employeeId, setEmployeeId] = useState();
    const [employeeIdErr, setEmployeeIdErr] = useState("");

    const updateEmployeeId = event => setEmployeeId(event.target.value);

    const tempUpdate = "/manager/updateEmployee/"+employeeId;
    const tempDelete = "/manager/deleteEmployee/"+employeeId;

    const formSubmit = event => {
        event.preventDefault();
        setEmployeeIdErr("");
        if(action == "update")
          history.push(tempUpdate);

        if(action == "delete")
          history.push(tempDelete);
    }

    const formContent = [
        <div key="formContentUpdateEmployee">
          <form className="form-signin" onSubmit={formSubmit}>
            <div className="form-label-group">
              <input
                type="text"
                id="empid"
                className="form-control"
                placeholder="Employee Id"
                onChange={updateEmployeeId}
                required
                autoFocus
              />
              <label htmlFor="empid">Employee Id</label>
            </div>
            <button
                className="btn btn-lg btn-primary btn-block text-uppercase"
                type="submit"
                >
                Get Employee Details
            </button>
          </form>
        </div>
    ];
    return (
        <Fragment>
          <FormLayout heading="Enter Employee Id" formContent={formContent} />
          
        </Fragment>
      
      )

}

export default GetEmployeeDetailsPage;