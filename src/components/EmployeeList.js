import React from "react";
import { Link } from "react-router-dom";
import Employee from "./Employee";

const EmployeeList = props => {
  return (
    <div>
        <h4>Showing results for available {`${props.type}s`}</h4>
      <Link to="/">Refine your search</Link>
      {props.availablePeople.length == 0 ? (
        <h1>There are no available employees</h1>
      ) : (
        props.availablePeople.map(emp => (
          <Employee
            employee={emp}
            day={props.day}
            key={emp.name}
            switchType={props.switchType}
          />
        ))
      )}
    </div>
  );
};

export default EmployeeList;
