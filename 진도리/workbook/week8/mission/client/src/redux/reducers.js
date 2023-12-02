const initialState = {
    userId: '',
    userPassword: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USER_ID":
        return { ...state, userId: action.payload };
      case "SET_USER_PASSWORD":
        return { ...state, userPassword: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  