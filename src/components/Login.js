import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login_user } from '../actions';
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

const AskQuestion = (props) => {
    const classes = useStyles();
    const [inputUsernameVal, setValue] = useState('');
    const [inputPasswordVal, setPasswordValue] = useState('');
    const { loggedIn, dispatch } = props;
    const { handleSubmit } = useForm();
    
    const handleUsernameChange = (event) => {
      setValue(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
      };
    // const onSubmit = data => console.log(inputTitleVal);
//     const data = {
//       user_name: inputUsernameVal,
//       password: inputPasswordVal 
//   }
    function loginUser(){
      dispatch(login_user(inputUsernameVal, inputPasswordVal))
      console.log(loggedIn) 
    }
   
    if(!loggedIn){
    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs>
            </Grid>
            <Grid item xs={6}>
                <div className={classes.paper}>
                <h1>Login</h1>
                
                <form className={classes.root} 
                  noValidate autoComplete="off">
                    <TextField
                    required
                    id="standard-basic"
                    label="Username"
                    style={{ margin: 8 }}
                    helperText="Username should be precise"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="user_name"
                    value= {inputUsernameVal}
                    onChange={handleUsernameChange}
                    />
                    <TextField
                    required
                    id="standard-basic-1"
                    label="Password"
                    type="password"
                    style={{ margin: 8 }}
                    helperText="Password should be precise"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="password"
                    value= {inputPasswordVal}
                    onChange={handlePasswordChange}
                    />
                    <Button variant="outlined" type="submit" 
                      onClick={handleSubmit(loginUser)}>
                      Login
                    </Button>
                </form>
              </div>
            </Grid>
            <Grid item xs>
            </Grid>
          </Grid>
    </div>
    )} 
    return <Redirect to="/" />
}
/*
    FORM VALIDATION
    FEEDBACK WHEN LOGGING IN
    like loading...
    login error...
    username and password invalid
*/
const mapStateToProps = (state) => {
    return {
        loggedIn: state.userReducers.loggedIn
    }
}

export default connect(mapStateToProps)(AskQuestion)  