import React from "react";
import Datepicker from "react-datepicker";
import moment from "moment";
import { Label } from "semantic-ui-react";

class DateandTime extends React.Component {
  state = {
    date: null,
    giveUpDay: null
  };

  handleChanges = e => {
    this.setState({
      date: e
    });
    this.props.changeDate(e);
  };
  handleGiveUp = e => {
    this.setState({
      giveUpDay: e
    });
  };
  getOffDays = selectedEmp => {
    const [day, value] = Object.entries(selectedEmp);
    console.log(day);
  };

  render() {
    const { switchTypeSelection } = this.props;
    this.getOffDays(this.props.selectedEmp);
    if (switchTypeSelection === "Time Change") {
      return (
        <div>
          <Datepicker
            autoComplete="off"
            placeholderText="I want to be off by..."
            minDate={new Date()}
            maxDate={moment()
              .add(10, "days")
              .toDate()}
            timeCaption="Time"
            timeFormat="HH:mm"
            timeIntervals={30}
            selected={this.state.date}
            dateFormat="MMMM d, yyyy h:mm aa"
            onChange={this.handleChanges}
            showTimeSelect
            withPortal
          />
        </div>
      );
    } else {
      return (
        <div>
          <Label pointing="below">Select date you want off</Label>
          <Datepicker
            autoComplete="off"
            name="date"
            placeholderText="Select a date"
            minDate={new Date()}
            maxDate={moment()
              .add(10, "days")
              .toDate()}
            dateFormat="MMMM d, yyyy"
            selected={this.state.date}
            onChange={this.handleChanges}
            withPortal
          />
          <Datepicker
            autoComplete="off"
            name="giveUpDay"
            placeholderText="Give up day"
            minDate={new Date()}
            maxDate={moment()
              .add(10, "days")
              .toDate()}
            dateFormat="MMMM d, yyyy"
            selected={this.state.giveUpDay}
            onChange={this.handleGiveUp}
            withPortal
          />
          <Label pointing="above">Select the off day you will give</Label>
        </div>
      );
    }
  }
}

export default DateandTime;
