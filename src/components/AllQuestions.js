import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../index.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import NestedList from './NestedList';
import AlignItemsList from './AlignItemsList';

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
    const { questions } = props
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <NestedList />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.paper}>
          <h1>Popular Questions</h1>
            {console.log(questions)}
            {questions && questions.map(question => (
                <div key={question.question_id}>
                  <Link to={'/question_detail/' + question.question_id}
                     id="question_title">
                     {/* THE LINK EXTENDS BEYOND THE TITLE ITSELF, WHY? */}
                    <h2 id="question_title">{question.question_title}</h2>
                  </Link>
                    <Chip label={"Answers " + question.num_of_answers}
                        size="small" 
                        id="num_of_answers"/>
                    <Chip
                        avatar={<Avatar alt="Natacha" 
                        src="/static/images/avatar/1.jpg" />}
                        label={question.user_name}
                        size="small"
                    />
                </div>
                )
            )}
          </div>
        </Grid>
        <Grid item xs>
          <AlignItemsList />      
        </Grid>
      </Grid>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        questions: state.questionReducers
    }
}

export default connect(mapStateToProps)(AllQuestions) 