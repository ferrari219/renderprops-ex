import React, { Component } from 'react';
import FormManager from './FormManager';
import LoginForm from './LoginForm';

class App extends Component {
  state={
    login: ''
  }
  handleSubmitLogin=(login)=>{
    this.setState({
      login: login
    })
  }
  render() {
    return (
      <div>
        <FormManager onSubmit={this.handleSubmitLogin}>
          {
            ({ form, onChange, onSubmit }) => <LoginForm form={form} onChange={onChange} onSubmit={onSubmit}/>
          }
        </FormManager>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default App;