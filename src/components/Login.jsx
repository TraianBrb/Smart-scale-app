import React from 'react';
import PropTypes from 'prop-types';

const Login = props => (
  <nav className="login">
    <h2>Smart Scale Login</h2>
    <p>Sign in to manage your progress.</p>
    <button className="facebook" onClick={() => props.authenticate('Facebook')}>
      Log in with Facebook
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
