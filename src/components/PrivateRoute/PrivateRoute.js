import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
  
  render() {
    const { component: Component, isAuthorized } = this.props;

    if (isAuthorized) {
      return <Component {...this.props} />
    }

    return <Redirect to="/login" /> 
  }
}

export default AuthHOC(PrivateRoute);
