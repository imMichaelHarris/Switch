import React, { Component } from "react";
import { Dropdown, Button, Icon } from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";
import DateandTime from "./DateandTime";

class Setup extends Component {

  state = {
    selectedEmp: {}
  }

// componentDidMount(){
//   this.setState({
//     selectedEmp: JSON.parse(localStorage.getItem('switchEmployee'))
//   })
// }
  selectName = (e) => {

    const selectedEmp = this.props.schedule.filter(emp => emp.name === e.target.textContent)
    this.setState({
      selectedEmp: selectedEmp[0]
    })
  }

  render() {
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
            color={switchTypeSelection === "Day Off" ? "blue" : "grey"}
          >
            <Icon name="calendar"  /> Day Off           

          </Button>
          <Button.Or />
          <Button
            onClick={() => switchType("Time Change")}
            color={switchTypeSelection === "Time Change" ? "blue" : "grey"}
          >
            <Icon  name="clock" />Time Change 
          </Button>
        </Button.Group>
        {switchTypeSelection && (
          <DateandTime switchTypeSelection={this.props.switchTypeSelection} changeDate={this.props.changeDate}/>
        )}

        <Button onClick={() => this.props.searchEmployees(this.state.selectedEmp)}inverted color="blue" size="big"> <Icon name="search"/>Find my switch  </Button>
      </div>
    );
  }
}

export default Setup;
