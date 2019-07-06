import React from "react";
import { Link } from "react-router-dom";
import ResultInfo from "./ResultInfo";
import Employee from "./Employee";
import { Divider, Header } from "semantic-ui-react";

const EmployeeList = props => {
  return (
    <div>
      <header className="results-header">
        <ResultInfo
          type={props.type}
          switchType={props.switchType}
          time={props.time}
          normalDate={props.normalDate}
          results={props.availablePeople.length + 1}
        />
        <Link to="/">Search again</Link>
      </header>
      <Divider />
      {props.availablePeople.length == 0 ? (
        <Header as="h1" color="red">
          There are no avaiable employees
        </Header>
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
