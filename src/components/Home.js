import React, { Component } from "react";
import Setup from "./Setup";

const Home = (props) => {
  return (
    <div>
      <Setup
        schedule={props.schedule}
        switchType={props.switchType}
        switchTypeSelection={props.switchTypeSelection}
        searchEmployees={props.searchEmployees}
        changeDate={props.changeDate}
        daySearch={props.daySearch}
      />
    </div>
  );
};

export default Home;
