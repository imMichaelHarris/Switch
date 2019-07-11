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
              <Table.Cell positive={this.props.day === "secTuesday" ? true : false}>{Sunday}</Table.Cell>
              <Table.Cell positive={this.props.day === "secTuesday" ? true : false}>{Monday}</Table.Cell>
              <Table.Cell >Tuesday}</Table.Cell>
              <Table.Cell positive>{Wednesday}</Table.Cell>
              <Table.Cell>{Thursday}</Table.Cell>
              <Table.Cell>{Friday}</Table.Cell>
              <Table.Cell positive={highlight("Saturday")}>{Saturday}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{secSunday}</Table.Cell>
              <Table.Cell>{secMonday}</Table.Cell>
              <Table.Cell positive={this.props.day === "secTuesday" ? true : false}>{secTuesday}</Table.Cell>
              <Table.Cell>{secWednesday}</Table.Cell>
              <Table.Cell>{secThursday}</Table.Cell>
              <Table.Cell>{secFriday}</Table.Cell>
              <Table.Cell>{secSaturday}</Table.Cell>
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
              <Table.Cell>{selected.Sunday}</Table.Cell>
              <Table.Cell>{selected.Monday}</Table.Cell>
              <Table.Cell>{selected.Tuesday}</Table.Cell>
              <Table.Cell>{selected.Wednesday}</Table.Cell>
              <Table.Cell>{selected.Thursday}</Table.Cell>
              <Table.Cell>{selected.Friday}</Table.Cell>
              <Table.Cell>{selected.Saturday}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{selected.secSunday}</Table.Cell>
              <Table.Cell>{selected.secMonday}</Table.Cell>
              <Table.Cell>{selected.secTuesday}</Table.Cell>
              <Table.Cell>{selected.secWednesday}</Table.Cell>
              <Table.Cell>{selected.secThursday}</Table.Cell>
              <Table.Cell>{selected.secFriday}</Table.Cell>
              <Table.Cell>{selected.secSaturday}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </ReactCardFlip>
    );
  }
}

export default Employee;
