import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../index.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import AlignItemsList from '../layout/AlignItemsList';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const AllQuestions = (props) =>{
    const { questions, currentUser } = props
    const classes = useStyles();

    function ask_question_btn(){
        props.history.push('/ask_question')
    }
    return (
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <div className={classes.paper}>
          {
            currentUser.is_admin ?
            <p>Admin Dashboard</p>:
            null
          }
           
            <Button
              onClick={ask_question_btn} 
              variant="outlined">
              Ask Question
            </Button> 
          
          <h1>Popular Questions</h1>
            
            {questions && questions.map(question => (
                <div key={question.question_id}>
                  <Link to={'/question_detail/' + question.question_id}
                     id="question_title">
                     {/* THE LINK EXTENDS BEYOND THE TITLE ITSELF, WHY? */}
                    <h2 id="question_title">{question.question_title}</h2>
                  </Link>
                    <Chip label={"Answers " + question.answers.length}
                        size="small" 
                        id="num_of_answers"/>
                    <Chip
                        avatar={<Avatar alt={question.user_name} 
                        src="/static/images/avatar/1.jpg" />}
                        label={question.user_name}
                        size="small"
                    />
                </div>
                )
            )}
          </div>
        </Grid>
        <Grid item xs={12} sm={1}>
               
        </Grid>
        <Grid item xs={12} sm={3}>
          <AlignItemsList />      
        </Grid>
      </Grid>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        questions: state.questionReducers,
        isAuthenticated: state.questionReducers.isAuthenticated,
        currentUser: state.userReducers.currentUser
    }
}

export default connect(mapStateToProps)(AllQuestions) 