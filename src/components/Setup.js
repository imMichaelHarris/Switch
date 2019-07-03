import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Button } from "semantic-ui-react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateandTime from "./DateandTime";

class Setup extends Component {




  render() {
    const { switchType, switchTypeSelection } = this.props;
    return (
      <div>
        <Dropdown
          placeholder="Select your name"
          search
          selection
          options={this.props.schedule}
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
          <DateandTime switchTypeSelection={this.props.switchTypeSelection} />
        )}
      </div>
    );
  }
}

export default Setup;
