import React from "react";
import "./styles/App.css";
import schedule from "./schedule";
import { runner, bartender, leadBOH, leadFOH, cook, standAtt } from "./types";
import moment from "moment";
import { Route, withRouter } from "react-router-dom";

import Setup from "./components/Setup";
import Home from "./components/Home";
import EmployeeList from "./components/EmployeeList";

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
      schedule: schedule
    });
  }

  searchEmployees = selectedEmp => {
    let type = [];
    if (selectedEmp.type === "runner") {
      type = runner;
    } else if (selectedEmp.type === "bartender") {
      type = bartender;
    } else if (selectedEmp.type === "leadBOH") {
      type = leadBOH;
    } else if (selectedEmp.type === "cook") {
      type = cook;
    } else if (selectedEmp.type === "leadFOH") {
      type = leadFOH;
    } else {
      type = standAtt;
    }
    // this.daySearch(type, this.state.date);
    this.state.switchType === "Time Change"
      ? this.timeSearch(type, this.state.date, this.state.time)
      : this.daySearch(type, this.state.date);
  };

  daySearch = (type, day) => {
    this.setState({
      availablePeople: type.filter(emp => {
        return (
          emp[day].includes("AVL") ||
          emp[day] === "A" ||
          emp[day].substring(0, 7) == "A - PDO"
        );
      })
    });
    this.props.history.push("/results")
  };

  timeSearch = (type, date, time) => {
    const hours = "-";
    const availablePeople = [];
    type.map(emp => {
      const timeOff = emp[date]
        .split(hours)
        .pop()
        .substring(0, 6);
      if (timeOff === "A" || emp[date].startsWith("P:")) {
        return;
      }

      if (
        parseInt(timeOff) <= parseInt(time) &&
        parseInt(timeOff.substring(0, 3)) != "00"
      ) {
        console.log("hi");
        availablePeople.push(emp);
        if (
          parseInt(time.substring(0, 3)) == parseInt(timeOff.substring(0, 3)) &&
          timeOff.substring(3, 6) == ":30"
        ) {
          availablePeople.pop(emp);
        }
      }
    });
    availablePeople.map(emp => {
      const timeOff = emp[date]
        .split(hours)
        .pop()
        .substring(0, 6);

      if (timeOff === "A" || emp[date].startsWith("P:")) {
        availablePeople.pop(emp);
      }
    });

    this.setState({
      availablePeople: availablePeople
    });
  };
  changeDate = e => {
    const date = moment(e).isAfter("Jul 6 2019")
      ? `sec${moment(e).format("dddd")}`
      : moment(e).format("dddd");
    this.state.switchType === "Time Change"
      ? this.setState({
          date: date,
          time: moment(e).format("kk:mm")
        })
      : this.setState({
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

        <Route
          exact
          path="/"
          render={props => (
            <Home
              {...props}
              schedule={this.state.schedule}
              switchType={this.switchType}
              switchTypeSelection={this.state.switchType}
              searchEmployees={this.searchEmployees}
              changeDate={this.changeDate}
              daySearch={this.daySearch}
            />
          )}
        />
        <Route path="/results" render={props => <EmployeeList {...props} availablePeople={this.state.availablePeople} /> }/>
      </div>
    );
  }
}

export default withRouter(App);
