import React from "react";
import Datepicker from "react-datepicker";
import moment from 'moment'

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
          
            placeholderText="Time you want to be off by"
            minDate={new Date()}
            maxDate={moment().add(9, 'days').toDate()}
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
            minDate={new Date()}
            maxDate={moment().add(9, 'days').toDate()}
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
