import React from "react";
import "semantic-ui-css/semantic.min.css";

import "./styles/App.css";
import schedule from "./schedule";
import { runner, bartender, leadBOH, leadFOH, cook, standAtt } from "./types";
import moment from "moment";
import { Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import EmployeeList from "./components/EmployeeList";

class App extends React.Component {
  state = {
    schedule: [],
    availablePeople: [],
    giveUpDay: null,
    date: null,
    normalDate: null,
    timeChange: null,
    switchType: null,
    type: ""
  };
  componentDidMount() {
    this.setState({
      schedule: schedule
    });
  }
  swap = (selectedEmp, emp2) => {
    selectedEmp.date = emp2.date;
    emp2.date = this.state.giveUpDay;
  };

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
    } else if (selectedEmp.type === "standAtt") {
      type = standAtt;
    }
    this.setState({
      selectedEmp: selectedEmp,
      type: selectedEmp.type,
      giveUpDay: selectedEmp[this.state.date]
    });
    localStorage.setItem("switchEmployee", JSON.stringify(selectedEmp));
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

    this.props.history.push("/results");
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
    this.props.history.push("/results");
  };
  changeDate = e => {
    const date = moment(e).isAfter("Aug 04 2019")
      ? `sec${moment(e).format("dddd")}`
      : moment(e).format("dddd");
    this.state.switchType === "Time Change"
      ? this.setState({
          normalDate: moment(e).format("ddd, MMM Do"),
          date: date,
          time: moment(e).format("kk:mm")
        })
      : this.setState({
          normalDate: moment(e).format("ddd, MMM Do"),

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

        <Route
          path="/results"
          render={props => (
            <EmployeeList
              {...props}
              selectedEmp={this.state.selectedEmp}
              availablePeople={this.state.availablePeople}
              day={this.state.date}
              switchType={this.state.switchType}
              type={this.state.type}
              time={this.state.time}
              normalDate={this.state.normalDate}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
