import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Dropdown } from "semantic-ui-react";

class Setup extends Component {
  state = {
    names: []
  };

  componentDidMount() {
    this.setState({
      names: this.props.weekOne.map(emp => {
          return {
              ...emp,
              text: emp.name //need text value for semantic ui to display names
          }
      })
    });
  }
  render() {
    return <div><Dropdown placeholder="Select your name" search selection options={this.state.names}/></div>;
  }
}

export default Setup;
