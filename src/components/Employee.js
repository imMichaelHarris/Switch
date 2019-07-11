import React from "react";
import { Card, Label, Segment, Table } from "semantic-ui-react";
import ReactCardFlip from "react-card-flip";

class Employee extends React.Component {
  state = {
    isFlipped: false
  };

  flipCard = () => {
    this.setState(prevState => {
      return {
        isFlipped: !prevState.isFlipped
      };
    });
  };

  render() {
    const {
      name,
      Sunday,
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      secSunday,
      secMonday,
      secTuesday,
      secWednesday,
      secThursday,
      secFriday,
      secSaturday
    } = this.props.employee;
    const selected = this.props.selectedEmp;

    const highlight = (day) => this.props.day === day ? true : false
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        {/* <h1 key="front">Test</h1>
          <h1 key="back">Test back</h1> */}
        <Card key="front" onClick={this.flipCard}>

    

            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Description>
                {this.props.employee[this.props.day].substring(0, 14)}
              </Card.Description>
              <Card.Meta>
                {this.props.employee[this.props.day].substring(14, 22)}
              </Card.Meta>
            </Card.Content>

        </Card>

        <Table className="empTable" celled key="back" onClick={this.flipCard}>
          <Table.Header>
            <Label as="a"color="blue" ribbon>{name} </Label>
            <Table.Row>
              <Table.HeaderCell>Sunday</Table.HeaderCell>
              <Table.HeaderCell>Monday</Table.HeaderCell>
              <Table.HeaderCell>Tuesday</Table.HeaderCell>
              <Table.HeaderCell>Wednesday</Table.HeaderCell>
              <Table.HeaderCell>Thursday</Table.HeaderCell>
              <Table.HeaderCell>Friday</Table.HeaderCell>
              <Table.HeaderCell>Saturday</Table.HeaderCell>
            </Table.Row>

          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell positive={highlight("Sunday")}>{Sunday}</Table.Cell>
              <Table.Cell positive={highlight("Monday")}>{Monday}</Table.Cell>
              <Table.Cell positive={highlight("Tuesday")}>Tuesday}</Table.Cell>
              <Table.Cell positive={highlight("Wednesday")}>{Wednesday}</Table.Cell>
              <Table.Cell positive={highlight("Thursday")}>{Thursday}</Table.Cell>
              <Table.Cell positive={highlight("Friday")}>{Friday}</Table.Cell>
              <Table.Cell positive={highlight("Saturday")}>{Saturday}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell positive={highlight("secSunday")}>{secSunday}</Table.Cell>
              <Table.Cell positive={highlight("secMonday")}>{secMonday}</Table.Cell>
              <Table.Cell positive={highlight("secTuesday")}>{secTuesday}</Table.Cell>
              <Table.Cell positive={highlight("secWednesday")}>{secWednesday}</Table.Cell>
              <Table.Cell positive={highlight("secThursday")}>{secThursday}</Table.Cell>
              <Table.Cell positive={highlight("secFriday")}>{secFriday}</Table.Cell>
              <Table.Cell positive={highlight("secSaturday")}>{secSaturday}</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Header>
          <Label as="a"color="blue" ribbon>{selected.name} </Label>

            <Table.Row>
              <Table.HeaderCell>Sunday</Table.HeaderCell>
              <Table.HeaderCell>Monday</Table.HeaderCell>
              <Table.HeaderCell>Tuesday</Table.HeaderCell>
              <Table.HeaderCell>Wednesday</Table.HeaderCell>
              <Table.HeaderCell>Thursday</Table.HeaderCell>
              <Table.HeaderCell>Friday</Table.HeaderCell>
              <Table.HeaderCell>Saturday</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell positive={highlight("Sunday")}>{selected.Sunday}</Table.Cell>
              <Table.Cell positive={highlight("Monday")}>{selected.Monday}</Table.Cell>
              <Table.Cell positive={highlight("Tuesday")}>{selected.Tuesday}</Table.Cell>
              <Table.Cell positive={highlight("Wednesday")}>{selected.Wednesday}</Table.Cell>
              <Table.Cell positive={highlight("Thursday")}>{selected.Thursday}</Table.Cell>
              <Table.Cell positive={highlight("Friday")}>{selected.Friday}</Table.Cell>
              <Table.Cell positive={highlight("Saturday")}>{selected.Saturday}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell positive={highlight("secSunday")}>{selected.secSunday}</Table.Cell>
              <Table.Cell positive={highlight("secMonday")}>{selected.secMonday}</Table.Cell>
              <Table.Cell positive={highlight("secTuesday")}>{selected.secTuesday}</Table.Cell>
              <Table.Cell positive={highlight("secWednesday")}>{selected.secWednesday}</Table.Cell>
              <Table.Cell positive={highlight("secThursday")}>{selected.secThursday}</Table.Cell>
              <Table.Cell positive={highlight("secFriday")}>{selected.secFriday}</Table.Cell>
              <Table.Cell positive={highlight("secSaturday")}>{selected.secSaturday}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </ReactCardFlip>
    );
  }
}

export default Employee;
