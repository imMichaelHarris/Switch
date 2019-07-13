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
        <a style={{fontSize: "1rem", display: "block", marginTop: "10px"}}href="mailto:mhguitar1997@gmail.com?Subject=Switch%20App%20Bug">If you notice something off please send a bug report</a>
      </header>
      <Divider />
      {props.availablePeople.length == 0 ? (
        <Header as="h1" color="red">
          There are no avaiable employees
        </Header>
      ) : (
        props.availablePeople.map(emp => (
          <Employee
            selectedEmp={props.selectedEmp}
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
