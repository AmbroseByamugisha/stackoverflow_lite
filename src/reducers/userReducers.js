const initialState = {
    currentUser: {},
    isAuthenticated: false
}
// ADD IMAGES TO THE USER
// USING IMAGE URL

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                    ...state, 
                    currentUser: action.payload,
                    isAuthenticated: true
                }
        case 'LOGIN_ERROR':
            return {
                ...state,
                authMsg: "Failed to login"
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authMsg: "Failed to create account"
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