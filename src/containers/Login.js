import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginInputChange, logUser } from '../store/reducer';

const mapStateToProps = state => ({
  inputText: state.token,
  loginMessage: state.loginMessage,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  onInputChange: (token) => {
    // Je crée un prop onInputChange
    // et dispatch le token que je reçois
    dispatch(loginInputChange(token));
  },
  onFormSubmit: () => {
    dispatch(logUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);