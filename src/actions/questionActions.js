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
// export const create_answer = () => {
//     return {
//         type: 'CREATE_ANSWER'
//     }
// }
