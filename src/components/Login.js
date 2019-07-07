import React from "react";
import { Button, Form, Message } from "semantic-ui-react";

class Login extends React.Component {
  state = {};

  render() {
    return (
      <Form>
        <Form.Input label="Email" placeholder="joe@schmoe.com" />
        <Message
          error
          header="Action Forbidden"
          content="You can only sign up for an account once with a given e-mail address."
        />
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Login;
