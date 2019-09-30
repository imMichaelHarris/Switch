import React from "react";
import Setup from "./Setup";

const Home = props => {
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
      <p style={{ marginTop: "20px", fontSize: ".8rem" }}>Very much a work in progress</p>
      <p style={{ marginTop: "20px", fontSize: ".8rem" }}>
        Schedule snapshot taken at 9/21/19 8:48am PST
      </p>

      <p
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          fontSize: "1rem"
        }}
      >
        Switch app v0.5.6 by{" "}
        <a href="https://immichaelharris.com">Michael Harris</a>
      </p>
    </div>
  );
};

export default Home;
