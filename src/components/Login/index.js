import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Icon } from 'semantic-ui-react';

import './index.scss';

const Login = ({ inputText, onInputChange, loginMessage, onFormSubmit, loading }) => {
  
  const handleChange = (evt) => {
    const { value } = evt.target;
    onInputChange(value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit();
  }
  
  return (
    <div id="login">
      <h1>Login with <Icon name="github" /></h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>{loginMessage}</label>
          <Form.Input
            loading={loading}
            disabled={loading}
            value={inputText}
            onChange={handleChange}
          />
        </Form.Field>
        <Button loading={loading} disabled={loading} type='submit'>Go</Button>
      </Form>
    </div>
  );

};

Login.propTypes = {
  inputText: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  loginMessage: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Login;