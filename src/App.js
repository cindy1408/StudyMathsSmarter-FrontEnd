import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContainer from './containers/UserContainer'
import QuestionContainer from './containers/QuestionContainer';
import NavBar from './components/NavBar.js';
import gcse from './pages/gcse';
import igcse from './pages/igcse';
import Footer from './components/Footer';
import asLevel from './pages/asLevel';
import aLevel from './pages/aLevel';

function App() {
  return (
    <div className="App">
       
       <Router>
      <div className="app">
      <NavBar/>
        <Switch>
          <Route path="/gcse" component={gcse}/>
          <Route path="/igcse" component={igcse}/>
          <Route path="/asLevel" component={asLevel}/>
          <Route path="/aLevel" component={aLevel}/>
        </Switch>
      <Footer/>  
      </div>
    </Router>
    </div>
  );
}

export default App;
