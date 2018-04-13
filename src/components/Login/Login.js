import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isFail: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    const { authorizeUser, isAuthorized } = this.props;
    const { email, password } = this.state;

    authorizeUser(email, password);

    if (!isAuthorized) {
      this.setState({
        ...this.state,
        isFail: true
      })
    }
  }

  render() {
    const { isAuthorized } = this.props;
    const { isFail } = this.state;

    return isAuthorized 
      ? <Redirect to="/" /> 
      : <div>
          <div>
            <input name='email' onChange={this.handleChange} />
            <input type='password' name='password' onChange={this.handleChange} />
            { isFail
              ? <p className="error">Неверный пароль и/или почта</p>
              : null
            }
          </div>
          <button onClick={this.handleClick}>Войти</button>
        </div>
  }
}

export default AuthHOC(Login);
