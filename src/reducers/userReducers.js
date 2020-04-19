const initialState = {
    users: [
        {
            user_id: 1,
            user_name: "ambrose",
            password: "qwerty",
            imageUrl: "",
            loggedIn: false,
            authStatusMsg: ""
        },
        {
            user_id: 2,
            user_name: "byamu",
            password: "asdfgh",
            imageUrl: "",
            loggedIn: false,
            authStatusMsg: ""
        },
        {
            user_id: 1,
            user_name: "masiko",
            password: "zxcvbn",
            imageUrl: "",
            loggedIn: false,
            authStatusMsg: ""
        }
    ],
    usrloggedIn: false,
    usrAuthStatusMsg: ""
}
// ADD IMAGES TO THE USER
// USING IMAGE URL

export default(state=initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return state.users.map(user => {
                if(
                    user.user_name === action.usrName &&
                    user.password === action.passWrd
                    ){
                        return {
                            ...user,
                            loggedIn: !user.loggedIn,
                            authStatusMsg: user.user_name + " is logged In Successfully",
                            ...state,
                            usrloggedIn: !state.loggedIn,
                            usrAuthStatusMsg: "logged In successfully"
                        }
                    } else return state
            })
        case 'LOGIN_SUCCESS':
            return state;
        case 'LOGIN_ERROR':
            return state;
        default:
            return state;
    }
}