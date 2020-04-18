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
export const create_comment = (question_id, data) => {
    return {
        type: 'CREATE_COMMENT',
        id: question_id,
        data
    }
}
