import React from "react";
import "./styles/App.css";
import schedule from './schedule';
import {runners, bartenders, leadsBOH, leadsFOH, cooks. standAtt} from './types'
import moment from "moment";

import Setup from "./components/Setup";

class App extends React.Component {
  state = {
    // runners: [],
    // leadsBOH: [],
    // bartenders: [],
    // leadsFOH: [],
    // cooks: [],
    // standAtt: [],
    schedule: [],
    selectedName: "",
    type: "",
    availablePeople: [],
    date: null,
    timeChange: null,
    switchType: null
  };
  componentDidMount() {
    this.setState({
      schedule: schedule
    });
  }

  searchEmployees = selectedEmp => {
    console.log(selectedEmp, this.state.switchType,  this.state.date);
  };
  changeDate = e => {
   const date =  moment(e).isAfter("Jul 6 2019")
      ? `sec${moment(e).format("dddd")}`
      : moment(e).format("dddd");
    this.setState({
      date: date
    });
  };
  switchType = type => {
    this.setState({
      switchType: type
    });
  };

  render() {
    return (
      <div className="App">
        <Setup
          schedule={this.state.schedule}
          switchType={this.switchType}
          switchTypeSelection={this.state.switchType}
          searchEmployees={this.searchEmployees}
          changeDate={this.changeDate}
        />
      </div>
    );
  }
}

export default App;
