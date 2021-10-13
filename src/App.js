import './App.css';
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom';
import UserContainer from './containers/UserContainer';
import QuestionContainer from './containers/QuestionContainer';
import Results from './components/Results';
import Home from './components/Home';
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import gcse from './pages/gcse';
import igcse from './pages/igcse';
import asLevel from './pages/asLevel';
import aLevel from './pages/aLevel';
import homePage from './pages/homePage';
import Footer from './components/Footer';


>>>>>>> Jessica2


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/questions" component={QuestionContainer} />
        <Route path="/results" component={Results} />
        <Route component={Error} />
      </Switch>
=======
       
       <Router>
      <div className="app">
      <NavBar/>
        <Switch>

          <Route path="/" component={homePage} exact/>
          <Route path="/homePage" component={homePage} exact/>
          <Route path="/gcse" component={gcse} exact/>
          <Route path="/igcse" component={igcse} exact/>
          <Route path="/asLevel" component={asLevel} exact/>
          <Route path="/aLevel" component={aLevel} exact/>
          </Switch>
      <Footer/>  
      </div>
    </Router>
>>>>>>> Jessica2
    </div>
  );
}

export default App;
