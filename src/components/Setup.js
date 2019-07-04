import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Button } from "semantic-ui-react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateandTime from "./DateandTime";

class Setup extends Component {

  state = {
    selectedEmp: {}
  }

  selectName = (e) => {

    const selectedEmp = this.props.schedule.filter(emp => emp.name === e.target.textContent)
    this.setState({
      selectedEmp: selectedEmp[0]
    })
  }

  render() {
    // console.log(this.state.selectedEmp)
    const { switchType, switchTypeSelection } = this.props;
    return (
      <div className="setup">
        <Dropdown
          placeholder="Select your name"
          search
          selection
          options={this.props.schedule}
          onChange={this.selectName}
        />
        <Button.Group size="large">
          <Button
            onClick={() => switchType("Day Off")}
            color={switchTypeSelection === "Day Off" ? "blue" : ""}
          >
            Day Off
          </Button>
          <Button.Or />
          <Button
            onClick={() => switchType("Time Change")}
            color={switchTypeSelection === "Time Change" ? "blue" : ""}
          >
            Time Change
          </Button>
        </Button.Group>
        {switchTypeSelection && (
          <DateandTime switchTypeSelection={this.props.switchTypeSelection} changeDate={this.props.changeDate}/>
        )}

        <Button onClick={() => this.props.searchEmployees(this.state.selectedEmp, switchType, this)}inverted color="blue">Find my switch</Button>
      </div>
    );
  }
}

export default Setup;
