
const initialState = {
    token: '',
    loading: false,
    loginMessage: 'Saisissez votre token github',
  };
  
  // Types
  const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
  export const LOG_USER = 'LOG_USER';
  const CHANGE_LOGIN_MESSAGE = 'CHANGE_LOGIN_MESSAGE';
  
  // reducer qui gère le state
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case LOGIN_INPUT_CHANGE:
        return {
          ...state,
          token: action.token,
        };
      case LOG_USER:
        return {
          ...state,
          loading: true,
          loginMessage: 'Logging user',
        };
      case CHANGE_LOGIN_MESSAGE:
        return {
          ...state,
          loginMessage: action.text,
        };
      default:
        return state;
    }
  };
  
  // Action creators
  
  export const loginInputChange = token => ({
    type: LOGIN_INPUT_CHANGE,
    token,
  });
  
  export const logUser = () => ({
    type: LOG_USER,
  });
  
  export const changeLoginMessage = text => ({
    type: CHANGE_LOGIN_MESSAGE,
    text,
  });
  
  export default reducer;