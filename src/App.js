import './App.css';
import { Route, Switch } from 'react-router-dom';
import UserContainer from './containers/UserContainer';
import QuestionContainer from './containers/QuestionContainer';
import Results from './components/Results';
import Home from './components/Home';
import QuizContainer from './containers/QuizContainer'
import Login from './components/Login'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import ProfileContainer from './containers/ProfileContainer'

function App() {
  return (
    <div className="App">
      <Switch>
      {/* <Route exact path="/" component={Home} />
        <Route path="/questions" component={QuestionContainer} />
        <Route path="/results" component={Results} />
        <Route component={Error} /> */}
      <Route path="/quiz" exact component={QuizContainer} /> 
      <Route path="/login" exact component={Login} />
      <AuthenticatedRoute path="/profile" exact component={ProfileContainer} />
      </Switch>
    </div>
  );
}

export default App;
