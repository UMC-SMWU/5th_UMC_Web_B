export const setUserId = (id) => ({
    type: 'SET_USER_ID',
    payload: id 
    });

export const setUserPassword = (password) => ({ 
    type: 'SET_USER_PASSWORD',
    payload: password
});

export const setLoggedIn = (login) => ({ 
    type: 'SET_LOGGED_IN',
    payload: login,
});