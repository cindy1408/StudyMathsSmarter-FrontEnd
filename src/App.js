import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import NavBar from './components/NavBar.js';
import gcse from './pages/gcse';
import igcse from './pages/igcse';
import asLevel from './pages/asLevel';
import aLevel from './pages/aLevel';
import homePage from './pages/homePage';
import login from './pages/login';
=======
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
>>>>>>> b43c461649c6619908f44f795093f6b4334ca351
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
<<<<<<< HEAD
        <Switch>
          <Route path="/" component={homePage} exact/>
          <Route path="/homePage" component={homePage} exact/>
          <Route path="/gcse" component={gcse} exact/>
          <Route path="/igcse" component={igcse} exact/>
          <Route path="/asLevel" component={asLevel} exact/>
          <Route path="/aLevel" component={aLevel} exact/>
          <Route path="/login" component={login} exact/>
          </Switch>
      <Footer/>  
      </div>
    </Router>
=======
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
>>>>>>> b43c461649c6619908f44f795093f6b4334ca351
    </div>
  );
}

export default App;
