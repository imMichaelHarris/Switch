import React from "react";
import { Card } from "semantic-ui-react";

const Employee = props => {
    const {name} = props.employee
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
        {props.employee[props.day].substring(14,22)}
        </Card.Description>
        <Card.Meta>{props.employee[props.day].substring(0,14) }</Card.Meta> 
      </Card.Content>
    </Card>
  );
};

export default Employee;
