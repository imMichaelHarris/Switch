import React from "react";
import Datepicker from "react-datepicker";
import moment from 'moment'
import {Icon} from 'semantic-ui-react'

class DateandTime extends React.Component {
  state = {
    date: null
  };

  componentDidMount() {
    // this.setState({
    //   startDate: new Date()
    // });
  }
  handleChanges = e => {
    // console.log(moment(e).isAfter('Jul 6 2019'))
    console.log(e)
    this.setState({
      date: e
    });
    

    this.props.changeDate(e)
  };


  render() {
    const { switchTypeSelection } = this.props;

    if (switchTypeSelection === "Time Change") {
      return (
        <div>
          <Datepicker
                    autoComplete="off"

            placeholderText="I want to be off by..."
            minDate={new Date()}
            maxDate={moment().add(12, 'days').toDate()}
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
          <Datepicker
          autoComplete="off"
            name="date"
            placeholderText="Select a date"
            minDate={new Date()}
            maxDate={moment().add(12, 'days').toDate()}
            dateFormat="MMMM d, yyyy"
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
