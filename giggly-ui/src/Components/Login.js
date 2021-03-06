import React from "react";
import ReactDOM from "react-dom";
import logo from './giggly_logo.PNG';
import "./App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: ""
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  render() {
    return (
      <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="giggly_logo" />
        <p>
          <label for="username">Username </label>
          <br />
          <input
            id="enter_username"
            type="user"
            name="id"
            defualtValue=""
            class="credentials"
            maxlength="20"
            placeholder="Username"
            />
          <br />
          <label for="password">Password </label>
          <br />
          <input
            id="enter_password"
            type={this.state.hidden ? "password" : "text"}
            name="code"
            value={this.state.password}
            class="credentials"
            maxlength="20"
            placeholder="Password"
            onChange={this.handlePasswordChange}
          />
          <br />
          <input type="login" value="Login" class="credentials" />
          <br />
          <input type="checkbox" onClick={this.toggleShow} />Show Password
        </p>
        <a
          className="App-link"
          href="https://www.lifeimprovedmedical.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Life Improved Medical.com
        </a>
      </header>
      </div>
    );
  }
}

export default Login;
