const initialState = [
    {
        question_id: 1,
        question_title: "What is Javascript?",
        user_id: 1,
        user_name: "Ambrose Byamugisha",
        answers: [{
            answer_id: 1,
            answer_body: "Javascript is Nice!",
            user_name: "Sly and the Family stone",
            comments:[
                {
                    comment_id: 1,
                    comment_body: "Javascript sucks",
                    user_name: "Jeannie Mai"
                },
                {
                    comment_id: 2,
                    comment_body: "Javascript is cool",
                    user_name: "Prince"
                }
            ]
        },
        {
            answer_id: 2,
            answer_body: "I do not Give A shit about JS, It is just like! " + 
                "any Language to me",
            user_name: "Miles Davis",
            comments:[
                {
                    comment_id: 1,
                    comment_body: "Javascript sucks",
                    user_name: "Frank Ocean"
                },
                {
                    comment_id: 2,
                    comment_body: "Javascript is cool",
                    user_name: "John Lennon"
                }
            ]
        }
    ],
        num_of_answers: 1,
        num_of_interactions: 3
    },
    {
        question_id: 2,
        question_title: "Where is Kabale located?",
        user_id: 2,
        user_name: "Mahmood Abaas",
        answers:[{
            answer_id: 1,
            answer_body: "Its in my ass!!!",
            user_name: "Michael Jackson",
            comments:[
                {
                    comment_id: 1,
                    comment_body: "C'mon be respectful",
                    user_name: "Ayatollah"
                },
                {
                    comment_id: 2,
                    comment_body: "Just tell the person what the answer is and " +
                                    "dont take it personal",
                    user_name: "Sadio Mane"
                }
            ]
        }],
        num_of_answers: 1,
        num_of_interactions: 2
    }
]

// const num_of_answers = initialState.forEach(element=>{
//   element.num_of_answers = element.answer.length
// })


export default (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_QUESTION':
            return state.concat([action.data])
        case 'CREATE_ANSWER':
            return state.map((question) => {
                if (question.question_id === action.id) {
                    return {
                        ...question,
                        answers: question.answers.concat([action.data])
                        }
                    } else return question;
                })
        default:
            return state;
    }
  }