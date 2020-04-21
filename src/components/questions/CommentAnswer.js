import React, { useState } from 'react';
import { connect } from 'react-redux';
import { create_comment } from '../../actions'
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import '../../index.css';

function CommentAnswer(props){
    const { handleSubmit } = useForm();
    const { dispatch } = props
    const [inputCommentVal, setValue] = useState('');
    function genId(){
        const comm_id = props.answer.comments.length + 1
        return comm_id;
      }
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const data = {
        comment_id: genId(),
        comment_body: inputCommentVal,
        user_name: "Ambrose Byamugisha"
    }
    function postComment(){
        dispatch(create_comment(props.question.question_id,
            props.answer.answer_id, data ))
        console.log(props)
    }
    return (
        <div>
            <form id="post_answ_form">
                <textarea
                    value={inputCommentVal}
                    onChange={handleChange}>    
                </textarea>
                <Button variant="outlined" 
                    type="submit" 
                    id="post_answ_button"
                    onClick={handleSubmit(postComment)}        
                    >
                    Comment
                </Button>
                
            </form>
        </div>
    )

}

export default connect()(CommentAnswer)