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
      <p style={{ marginTop: "20px", fontSize: ".8rem" }}>Work in progress</p>
      <p style={{ marginTop: "20px", fontSize: ".8rem" }}>
        Schedule snapshot taken at 8/24/19 11:00pm PST
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
        Switch app v0.5.3 by{" "}
        <a href="https://immichaelharris.com">Michael Harris</a>
      </p>
    </div>
  );
};

export default Home;
