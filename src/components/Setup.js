import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Button } from "semantic-ui-react";

class Setup extends Component {
  state = {
    names: [],
    switchType: null
  };

  componentDidMount() {
    this.setState({
      names: this.props.weekOne.map(emp => {
        return {
          ...emp,
          value: emp.name, //need value to select
          text: emp.name //need text value for semantic ui to display names
        };
      })
    });
  }
  switchType = (type) => {
      this.setState({
          switchType: type
      })
  }
  render() {
    return (
      <div>
        <Dropdown
          placeholder="Select your name"
          search
          selection
          options={this.state.names}
        />
        <Button.Group size="large">
          <Button onClick={}>Day Off</Button>
          <Button.Or />
          <Button>Time Change</Button>
        </Button.Group>
      </div>
    );
  }
}

export default Setup;
