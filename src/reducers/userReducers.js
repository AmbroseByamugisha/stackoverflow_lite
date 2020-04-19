const initialState = {
    user_id: 1,
    user_name: "ambrose",
    password: "qwerty",
    imageUrl: "",
    loggedIn: false,
    authStatusMsg: ""
}
// ADD IMAGES TO THE USER
// USING IMAGE URL

export default(state=initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                loggedIn: state.user_name === action.usrName &&
                    state.password === action.passWrd ? 
                    !state.loggedIn: state.loggedIn,
                authStatusMsg: state.user_name + " is logged In"
            }
        case 'LOG_OUT':
            return {
                ...state,
                loggedIn: !state.loggedIn
            }
        default:
            return state;
    }
}