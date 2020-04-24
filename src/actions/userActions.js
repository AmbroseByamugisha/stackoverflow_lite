const login_error = (errorMsg) => {
  return {
    type: "LOGIN_ERROR",
    payload: errorMsg
  }
}

const signup_error = (errorMsg) => {
  return {
    type: "SIGNUP_ERROR",
    payload: errorMsg
  }
}


const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})

export const userPostFetch = user => {
    return dispatch => {
      return fetch("http://localhost:5000/api/v1/auth/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          // Accept: 'application/json',
        },
        body: JSON.stringify(user)
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.status !== 'success') {
            // Here you should have logic to handle invalid creation of a user.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error with creating the user, i.e. invalid username
            dispatch(signup_error(data.error))
          } else {
            localStorage.setItem("token", data.data.token)
            dispatch(loginUser(data.data))
          }
        })
    }
  }
  
export const userLoginFetch = user => {
    return dispatch => {
      return fetch("http://localhost:5000/api/v1/auth/signin", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          // Accept: 'application/json',
        },
        body: JSON.stringify(user)
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.status !== "success") {
            // Here you should have logic to handle invalid login credentials.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error
            dispatch(login_error(data.error))
          } else {
            localStorage.setItem("token", data.data.token)
            dispatch(loginUser(data.data))
          }
        })
    }
  }
export const getProfileFetch = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return fetch("http://localhost:5000/api/v1/auth/profile", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            // Accept: 'application/json',
            token: `${token}`
          }
        })
          .then(resp => resp.json())
          .then(data => {
            if (data.status !== "success") {
              // An error will occur if the token is invalid.
              // If this happens, you may want to remove the invalid token.
              localStorage.removeItem("token")
              //console.log("not working")
              dispatch(login_error())
            } else {
              dispatch(loginUser(data.data))
            }
          })
      }
    }
  }

const log_out = () => {
  return {
    type: 'LOGOUT_USER'
  }
}
  
// export const logoutUser = () => ({
//     type: 'LOGOUT_USER'
// })

export const logoutUser = () => {
  return dispatch => {
    localStorage.removeItem("token")
    dispatch(log_out())
  }
}