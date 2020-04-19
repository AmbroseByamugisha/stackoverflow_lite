import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrimarySearchAppBar from './components/AppBar1';
import AllQuestions from './components/AllQuestions';
import AskQuestion from './components/AskQuestion';
import QuestionDetail from './components/QuestionDetail';
import Login from './components/Login';

function App(){
  return(
    <div>
      <PrimarySearchAppBar />
      <Switch>
        <Route exact path="/" component={AllQuestions} /> 
        <Route path="/ask_question" component={AskQuestion} />
        <Route path="/question_detail/:id" component={QuestionDetail} />
        <Route path="/login" component={Login} /> 
      </Switch>
    </div>
  )
}
export default App
