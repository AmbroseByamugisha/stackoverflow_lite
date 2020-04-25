import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { userPostFetch } from '../../actions';
import '../../index.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
    alert_1: {
      marginTop: '5px',
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    }
  }));

const SignUp = (props) => {
    const classes = useStyles();
    const [inputEmailVal, setEmailValue] = useState('');
    const [inputFirstnameVal, setFirstnameValue] = useState('');
    const [inputLastnameVal, setLastnameValue] = useState('');
    const [inputPasswordVal, setPasswordValue] = useState('');
    const { isAuthenticated, userPostFetch, authMsg} = props;
    const { handleSubmit } = useForm();
    
    const handleEmailChange = (event) => {
      setEmailValue(event.target.value);
    };
    const handleFirstnameChange = (event) => {
        setFirstnameValue(event.target.value);
      };
    const handleLastnameChange = (event) => {
        setLastnameValue(event.target.value);
    };  
    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
      };
    // const onSubmit = data => console.log(inputTitleVal);
    const errorText = "Email is required";
    const data = {
        email: inputEmailVal,
        first_name: inputFirstnameVal,
        last_name: inputLastnameVal,
        password: inputPasswordVal 
    }
    /*
      APPLY VALIDATION FROM HERE
      TO OTHER FORMS
      ALSO IMPROVE THIS ONE
      THE USERNAME_INPUT SHOULD NOT START OFF ERRED
      UNTIL TOUCHED.
    */
    function loginUser(){
      if(inputEmailVal.length !== 0){ 
      userPostFetch(data)
      } else { alert(errorText)}
    }
   
    if(!isAuthenticated){
    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs>
            </Grid>
            <Grid item xs={6}>
              {
                  authMsg ?
                  <Alert severity="error" className={classes.alert_1}>
                    {authMsg}
                  </Alert>:
                  null
              }
                <div className={classes.paper}>
                
                
                <h1>Register</h1>
                
                <form
                  onSubmit={handleSubmit(loginUser)} 
                  className={classes.root} 
                  noValidate autoComplete="off">
                    <TextField
                    error = {
                              inputEmailVal.length === 0 ? 
                              true: 
                              false
                              }
                    id="standard-basic"
                    label="Email"
                    style={{ margin: 8 }}
                    helperText={
                      inputEmailVal.length === 0 ? 
                      errorText: null
                      }
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="email"
                    value= {inputEmailVal}
                    onChange={handleEmailChange}
                    /> 
                    <TextField
                    required
                    id="standard-basic-1"
                    label="First Name"
                    type="text"
                    style={{ margin: 8 }}
                    helperText="first name should be precise"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="first_name"
                    value= {inputFirstnameVal}
                    onChange={handleFirstnameChange}
                    />
                    <TextField
                    required
                    id="standard-basic-2"
                    label="Last Name"
                    type="text"
                    style={{ margin: 8 }}
                    helperText="last name should be precise"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="last_name"
                    value= {inputLastnameVal}
                    onChange={handleLastnameChange}
                    />
                    <TextField
                    required
                    id="standard-basic-3"
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
                    <Button variant="outlined" type="submit">
                      Signup
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
const mapStateToProps = state => ({
  isAuthenticated: state.userReducers.isAuthenticated,
  authMsg: state.userReducers.authMsg
})

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);