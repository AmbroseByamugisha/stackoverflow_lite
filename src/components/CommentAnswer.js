import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import '../index.css';

function CommentAnswer(props){
    const { handleSubmit } = useForm();
    function postComment(){
        console.log(props)
    }
    return (
        <div>
            <form id="post_answ_form">
                <textarea> 
                    
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