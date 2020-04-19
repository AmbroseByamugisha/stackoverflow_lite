export const create_question = (data) => {
    return {
        type: 'CREATE_QUESTION',
        data
    }
}

export const create_answer = (question_id, data) => {
    return {
        type: 'CREATE_ANSWER',
        id: question_id,
        data
    }
}

export const toggleIsCommenting = (question_id, answer_id) => {
    return {
        type: 'TOGGLE_IS_COMMENTING',
        qnId: question_id,
        answId: answer_id
    }
}
export const create_comment = (question_id, answer_id, data) => {
    return {
        type: 'CREATE_COMMENT',
        qnId: question_id,
        answId: answer_id,
        data
    }
}

export const login_user = (user_name, password) => {
    return {
        type: 'LOGIN',
        usrName: user_name,
        passWrd: password
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