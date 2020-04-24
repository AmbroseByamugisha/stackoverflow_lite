import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { userLoginFetch } from '../../actions';
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

const Login = (props) => {
    const classes = useStyles();
    const [inputEmailVal, setValue] = useState('');
    const [inputPasswordVal, setPasswordValue] = useState('');
    const { isAuthenticated, userLoginFetch, authMsg} = props;
    const { handleSubmit } = useForm();
  
    const handleEmailChange = (event) => {
      setValue(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
      };
   
    const errorText = "Email is required";
    const data = {
      email: inputEmailVal,
      password: inputPasswordVal 
    }
    /*
      APPLY VALIDATION FROM HERE
      TO OTHER FORMS
      ALSO IMPROVE THIS ONE
      THE USERNAME_INPUT SHOULD NOT START OFF ERRED
      UNTIL TOUCHED.
    */
    function login_User(){
      if(inputEmailVal.length !== 0){ 
      userLoginFetch(data)
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
                <h1>Login</h1>
                
                <form
                  onSubmit={handleSubmit(login_User)} 
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
                      Login
                    </Button>
                </form>
              </div>
              <div>
              Don't Have an Accout Yet? 
              <NavLink to="/signup" id="signup_link">
                Signup
              </NavLink>
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
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)  