import React from "react";
import Datepicker from "react-datepicker";

class DateandTime extends React.Component {
  state = {
    startDate: null,
    weekOne: 7/1/19
  };

  componentDidMount() {
    this.setState({
      startDate: new Date()
    });
  }
  handleChanges = e => {
    this.setState({
      startDate: e
    });
  };

  addDays = (start, end) => start + end
  render() {
    const { switchTypeSelection } = this.props;

    if (switchTypeSelection === "Time Change") {
      return (
        <div>
          <Datepicker
            placeholderText="Time you want to be off by"
            selected={this.state.startDate}
            onChange={this.handleChanges}
            showTimeSelect
            withPortal
          />
        </div>
      );
    } else {
      return (
        <div>
          <Datepicker
            placeholderText="Click to select a date"
            selected={this.state.startDate}
            onChange={this.handleChanges}
            withPortal
          />
        </div>
      );
    }
  }
}

export default DateandTime;
