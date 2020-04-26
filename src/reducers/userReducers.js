const initialState = {
    currentUser: {},
    isAuthenticated: false,
    isLoggingIn: false
}
// ADD IMAGES TO THE USER
// USING IMAGE URL

export default (state = initialState, action) => {
    switch (action.type) {

        case 'LOGIN_REQUEST':
            return {
                ...state,
                isLoggingIn: true,
                authMsg: false
            }
        case 'LOGIN_USER':
            return {
                    ...state, 
                    currentUser: action.payload,
                    isAuthenticated: true,
                    isLoggingIn: false,
                    authMsg:false
                }
        case 'LOGIN_ERROR':
            return {
                ...state,
                authMsg: action.payload,
                isLoggingIn: false
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authMsg: action.payload,
                isLoggingIn: false
            }
        case 'LOGOUT_USER':
            return {
                    ...state, 
                    currentUser: {},
                    isAuthenticated: false 
                }
        default:
            return state;
    }
}