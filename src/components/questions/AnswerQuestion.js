import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { create_answer } from '../../actions';

function AnswerQuestion(props){
    const { dispatch, currentUser } = props
    const { handleSubmit } = useForm();
    const [inputAnswerVal, setValue] = useState('');
    function genId(){
        const ans_id = props.question[0].answers.length + 1;
        return ans_id;
      }
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    function resetAnswerInput() {
        setValue('');
    }
    const data = {
        answer_id: genId(),
        answer_body: inputAnswerVal,
        user_name: currentUser.first_name,
        comments: []
    }
    function showQuestion(){
        if(currentUser.first_name){
        dispatch(create_answer(props.question[0].question_id, data))
        resetAnswerInput()
        }
        else {
            resetAnswerInput()
            alert("You are not authorized to answer")
        }
    }
    return (
        <div>
            <form id="post_answ_form">
                <label>Post Your Answer</label>
                <textarea 
                    value={inputAnswerVal}
                    onChange={handleChange}>

                    </textarea>
                <Button variant="outlined" 
                    type="submit" 
                    id="post_answ_button"        
                    onClick={handleSubmit(showQuestion)}>
                    Submit
                </Button>
                
            </form>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducers.currentUser
    }
}

export default connect(mapStateToProps)(AnswerQuestion)