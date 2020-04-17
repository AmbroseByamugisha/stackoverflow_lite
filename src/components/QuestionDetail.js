import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
import '../index.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import AnswerQuestion from './AnswerQuestion';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
    },
    paper: {
      padding: theme.spacing(2),
    //   textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function QuestionDetail(props){
    const { question, questions } = props
    const classes = useStyles();
    
    if(question){
    return (
        <div className={classes.root} key={question.question_id}>
            <Grid container spacing={3}>
                <Grid item xs>
                </Grid>
                <Grid item xs={6}>
                <div className={classes.paper}>
                    {question && question.map(question => (
                        <div key={question.question_id}>
                            <h1 id="question_title">
                                {question.question_title}
                            </h1>
                            <h2>Answers</h2>
                            {question.answers.map(answer => (
                                <div key={answer.answer_id}>
                                    <p id="answer_title">
                                        {answer.answer_body} 
                                        <span id="answer_username">
                                            {answer.user_name}
                                        </span>
                                    </p>
                                    
                                    {/*  */}
                                    <h4>Comments</h4>
                                    {answer.comments.map(comment => (
                                        <div key={comment.comment_id}>
                                            <h5>
                                                {comment.comment_body}
                                                <span id="answer_username">
                                                    {comment.user_name}
                                                </span> 
                                            </h5>
                                        </div>
                                        
                                    ))}
                                   
                                </div>
                            ))}
                        </div>
                    ))}
                    <AnswerQuestion question={question} questions={questions}/>     
                </div>  
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
    </div>
    )}
    // Y IT DOES NOT WORK?
    else return (
            <div>
                {console.log("does not exist")}
            </div>
        )
    
}

const mapStateToProps = (state, ownProps) => {
    const id = Number(ownProps.match.params.id)
    const questions = state.questionReducers
    const question = questions.filter(question => 
        question.question_id===id)
    return {
        questions: state.questionReducers,
        question: question
    }
}

export default connect(mapStateToProps)(QuestionDetail)