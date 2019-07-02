import React from "react";
import Datepicker from "react-datepicker";

const DateandTime = props => {
  const { switchTypeSelection } = props;

  if (switchTypeSelection === "Time Change") {
    return (
      <div>
        <Datepicker
          selected={this.state.startDate}
          onChange={this.handleChanges}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Datepicker
          selected={this.state.startDate}
          onChange={this.handleChanges}
        />
      </div>
    );
  }
};

export default DateandTime;
