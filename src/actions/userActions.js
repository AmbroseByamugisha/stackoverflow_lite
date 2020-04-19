export const login_user = (user_name, password) => {
    return {
        type: 'LOGIN',
        usrName: user_name,
        passWrd: password
    }
}

export const log_out = () => {
    return {
        type: 'LOG_OUT'
    }
}

/*
WHAT is getState, the parameter that is usually
used like in the function below.
*/
// export const loginUser = (user_name, password) => {
//     return dispatch => {
//         dispatch(request_login(user_name, password))

//     }   
// }