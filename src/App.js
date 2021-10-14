import './App.css';
import { Route, Switch } from 'react-router-dom';
import QuestionContainer from './containers/QuestionContainer';
import Results from './components/Results';
import ComingSoon from './components/ComingSoon';
import Home from './components/Home';
import QuizContainer from './containers/QuizContainer'
import Login from './components/Login'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import ProfileContainer from './containers/ProfileContainer'
import homePage from './components/homePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/homepage" component={homePage} />
        <Route path="/questions" component={QuestionContainer} />
        <Route path="/results" component={Results} />
        <Route path="/comingSoon" component={ComingSoon} />
        <Route path="/login" exact component={Login} />
        <AuthenticatedRoute path="/profile" exact component={ProfileContainer} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
