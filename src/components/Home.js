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

      <p style={{position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '100%', fontSize: '1rem'}}>Switch app v0.0.2 by <a href="immichaelharris.com">Michael Harris</a></p>
    </div>
  );
};

export default Home;
