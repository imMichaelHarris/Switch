import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Button } from "semantic-ui-react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Setup extends Component {
  state = {
    names: [],
    startDate: null
  };

  componentDidMount() {
    this.setState({
      names: this.props.weekOne.map(emp => {
        return {
          ...emp,
          value: emp.name, //need value to select
          text: emp.name //need text value for semantic ui to display names
        };
      }),
      startDate: new Date()
    });
  }
  handleChanges = e => {
    this.setState({
      startDate: e
    });
  };

  render() {
    const { switchType, switchTypeSelection } = this.props;
    return (
      <div>
        <Dropdown
          placeholder="Select your name"
          search
          selection
          options={this.state.names}
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
            >Time Change
          </Button>
        </Button.Group>
        {switchTypeSelection && (
          <Datepicker
            selected={this.state.startDate}
            onChange={this.handleChanges}
          />
        )}
        
      </div>
    );
  }
}

export default Setup;
