import React, { useState } from 'react';
import { connect } from 'react-redux';
import { create_comment } from '../../actions'
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import '../../index.css';

function CommentAnswer(props){
    const { handleSubmit } = useForm();
    const { dispatch, currentUser } = props
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
        user_name: currentUser.first_name
    }
    function postComment(){
        if(currentUser.first_name){
            dispatch(create_comment(props.question.question_id,
                props.answer.answer_id, data ))
        } else {
            alert('You are not authorized to comment')
        }
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

const mapStateToProps = (state) =>{
    return {
        currentUser: state.userReducers.currentUser
    }
}

export default connect(mapStateToProps)(CommentAnswer)