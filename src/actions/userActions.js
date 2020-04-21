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
    handling auth from 
    here showed there is 
    more to learn about 
    redux!!!!
    async functions, getState
    dispatch from here.
*/