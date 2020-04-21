import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { create_answer } from '../../actions';

function AnswerQuestion(props){
    const { dispatch } = props
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
        user_name: "Ambrose Byamugisha",
        comments: []
    }
    function showQuestion(){
        dispatch(create_answer(props.question[0].question_id, data))
        resetAnswerInput()
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

export default connect()(AnswerQuestion)