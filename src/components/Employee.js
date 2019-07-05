import React from "react";
import { Card } from "semantic-ui-react";
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
    const { name } = this.props.employee;
    return (
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>
            {this.props.employee[this.props.day].substring(14, 22)}
          </Card.Description>
          <Card.Meta>
            {this.props.employee[this.props.day].substring(0, 14)}
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default Employee;
