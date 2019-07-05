import React from "react";
import "./styles/App.css";
import schedule from './schedule';
import {runner, bartender, leadBOH, leadFOH, cook, standAtt} from './types'
import moment from "moment";

import Setup from "./components/Setup";

class App extends React.Component {
  state = {
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
      schedule: schedule,
    });
  }

  searchEmployees = selectedEmp => {
    let type = []
    if(selectedEmp.type === "runner"){
      type = runner
  } else if(selectedEmp.type === "bartender"){
    type = bartender
  } else if (selectedEmp.type === "leadBOH"){
    type = leadBOH
  } else if(selectedEmp.type === "cook"){
    type = cook
  } else if (selectedEmp.type === "leadFOH"){
    type = leadFOH
  } else {
    type = standAtt
  }
  this.daySearch(type, this.state.date)
  };

  daySearch = (type, day) => {
    this.setState({
      availablePeople: type.filter(emp => {
        return emp[day].includes('AVL') || emp[day] === 'A' || emp[day].substring(0,7) == 'A - PDO'
      })
    })

  }
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
          daySearch={this.daySearch}
        />
      </div>
    );
  }
}

export default App;
