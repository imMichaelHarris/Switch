import React from "react";
import "./styles/App.css";
import { weekOne } from "./weekOne";
import { weekTwo } from "./weekTwo";
// import { schedule } from "./schedule";
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
    const schedule = [];
    weekOne.map(emp => {
      weekTwo.map(empTwo => {
        if (empTwo.name === emp.name) {
          schedule.push({ ...emp, ...empTwo, value: emp.name, text: emp.name });
        }
      });
    });
    this.setState({
      schedule: schedule
    });
  }

  searchEmployees = (selectedEmp, switchType, day) => {};
  changeDate = e => {
    this.setState({
      date: e
    })
  }
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
          searchEmployess={this.searchEmployees}
          changeDate={this.changeDate}
        />
      </div>
    );
  }
}

export default App;
