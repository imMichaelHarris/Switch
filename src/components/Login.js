import React from "react";
import { Button, Form, Message } from "semantic-ui-react";
import {withRouter} from 'react-router-dom';

class Login extends React.Component {
  state = {
    password: '',
    error: false
  };

  handleChange = e => {
    this.setState({
      password: e.target.value
    })
  }
  onSubmit = () => {
    if(this.state.password === "butterscotch"){
      localStorage.setItem('tester', 'beta-July')
      this.props.history.push('/')
    } else {
      this.setState({
        error: true,
        password: ''
      })
    }
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={this.state.error}>
        <Form.Input label="Please login beta testers" placeholder="Like shortbread and " onChange={this.handleChange} value={this.state.password} type="password"/>
        <Message
          error
          header="Login Denied"
          content="This app is only to be used by employees. Contact Michael Harris if additional info is needed."
        />
        <Button>Login</Button>
      </Form>
    );
  }
}

export default Login;
