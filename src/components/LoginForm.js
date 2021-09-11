import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (!!this.state.username && !!this.state.password) {
      return this.props.handleLogin(this.state)
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleChange} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChange} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
