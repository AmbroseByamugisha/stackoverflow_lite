import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PrimarySearchAppBar from './components/layout/PrimarySearchAppBar';
import AllQuestions from './components/questions/AllQuestions';
import AskQuestion from './components/questions/AskQuestion';
import QuestionDetail from './components/questions/QuestionDetail';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp'

function App(){

  return(
    <div>
      <PrimarySearchAppBar />
      <Switch>
        <Route exact path="/" component={AllQuestions} /> 
        <Route path="/ask_question" component={AskQuestion} />
        <Route path="/question_detail/:id" component={QuestionDetail} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} /> 
      </Switch>
    </div>
  )
}

export default connect()(App);