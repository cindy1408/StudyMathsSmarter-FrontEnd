import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContainer from './containers/UserContainer'
import QuestionContainer from './containers/QuestionContainer';
import NavBar from './components/NavBar.js';
import gcse from './pages/gcse';

function App() {
  return (
    <div className="App">
       
       <Router>
      <div className="app">
      <NavBar/>
        <Switch>
          
          <Route path="/gcse" component={gcse}/>
        </Switch>
        
      </div>
    </Router>
    </div>
  );
}

export default App;
