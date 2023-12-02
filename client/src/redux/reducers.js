const initialState = {
    userId: '',
    userPassword: '',
    isLoggedIn: false,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USER_ID":
        return { ...state, userId: action.payload };
      case "SET_USER_PASSWORD":
        return { ...state, userPassword: action.payload };
      case 'SET_LOGGED_IN':
        return { ...state, isLoggedIn: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  