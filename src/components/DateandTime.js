import React from "react";
import Datepicker from "react-datepicker";
import moment from 'moment'

class DateandTime extends React.Component {
  state = {
    date: null,
    weekOne: 7/1/19
  };

  componentDidMount() {
    // this.setState({
    //   startDate: new Date()
    // });
  }
  handleChanges = e => {
    this.setState({
      date: e
    });
    this.props.changeDate(moment(e).format('dddd'))
  };

  addDays = (start, end) => start + end
  render() {
    const { switchTypeSelection } = this.props;

    if (switchTypeSelection === "Time Change") {
      return (
        <div>
          <Datepicker
            placeholderText="Time you want to be off by"
            selected={this.state.date}
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
            name="date"
            placeholderText="Click to select a date"
            selected={this.state.date}
            onChange={this.handleChanges}
            withPortal
          />
        </div>
      );
    }
  }
}

export default DateandTime;
