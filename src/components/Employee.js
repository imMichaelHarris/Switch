import React from "react";
import { Card } from "semantic-ui-react";

const Employee = props => {
    const {day, name} = props.employee
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{day}</Card.Meta>
        {/* <Card.Description>
          Matthew is a pianist living in Nashville.
        </Card.Description> */}
      </Card.Content>
    </Card>
  );
};

export default Employee;
