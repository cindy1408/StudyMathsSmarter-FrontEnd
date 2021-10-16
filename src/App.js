import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuestionContainer from './containers/QuestionContainer';
import Results from './components/Results';
import ComingSoon from './components/ComingSoon';
import GCSEAssessment from './components/GCSEAssessment';
import QuizContainer from './containers/QuizContainer'
import Login from './components/Login'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import ProfileContainer from './containers/ProfileContainer'
import homePage from './components/homePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Switch>
      <Route exact path="/" exact component={homePage} />
        <Route exact path="/homepage" exact component={homePage} />
        <Route path="/GCSEStart" exact component={GCSEAssessment} />
        <Route path="/questions" exact component={QuestionContainer} />
        <Route path="/results" exact component={Results} />
        <Route path="/comingSoon" exact component={ComingSoon} />
        <Route path="/login" exact component={Login} />
        <AuthenticatedRoute path="/profile" exact component={ProfileContainer} />
        <Route component={Error} />
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
