import React from "react";
import { Link } from "react-router-dom";

import ResultInfo from "./ResultInfo";
import Employee from "./Employee";

const EmployeeList = props => {
  return (
    <div>
      <ResultInfo
        type={props.type}
        switchType={props.switchType}
        time={props.time}
        normalDate={props.normalDate}
      />
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
