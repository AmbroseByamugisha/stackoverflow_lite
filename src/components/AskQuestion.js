import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { create_question } from '../actions';
import '../index.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
  }));

const AskQuestion = (props) =>{
    const classes = useStyles();
    const [inputTitleVal, setValue] = useState('');
    const { questions, myqns, dispatch } = props;
    const { handleSubmit } = useForm();
    
    function genId(){
      const qn_id = questions.length + 1;
      return qn_id;
    }
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    // const onSubmit = data => console.log(inputTitleVal);
    const data = {
      question_id: genId(),
      question_title: inputTitleVal,
      user_id: 1,
      user_name: "Ambrose Byamugisha",
      answers: [],
      num_of_answers: 0,
      num_of_interactions: 0,
      isEditing: false
  }
    function createQuestion(){
      dispatch(create_question(data))
      console.log(questions) 
    }
   
    
    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs>
            </Grid>
            <Grid item xs={6}>
                <div className={classes.paper}>
                <h1>Ask Question</h1>
                
                <form className={classes.root} 
                  noValidate autoComplete="off">
                    <TextField
                    required
                    id="standard-basic"
                    label="Question Title"
                    style={{ margin: 8 }}
                    helperText="Title should be precise"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="question_title"
                    value= {inputTitleVal}
                    onChange={handleChange}
                    />
                    <Button variant="outlined" type="submit" 
                      onClick={handleSubmit(createQuestion)}>
                      Post Question
                    </Button>
                </form>
              </div>
              <div>
                <h2>My Questions</h2>
                {myqns.map(myqn => (
                  <div key={myqn.question_id} 
                    id="question_title">
                    {myqn.question_title}
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs>
            </Grid>
          </Grid>
    </div>
    )
}

const mapStateToProps = (state) => {
  const questions = state.questionReducers;
  const my_questions = questions.filter(my_question =>(
    my_question.user_id === 1 ? my_question: null
  ))
  return {
    questions: state.questionReducers,
    myqns: my_questions
  }
}

export default connect(mapStateToProps)(AskQuestion)  