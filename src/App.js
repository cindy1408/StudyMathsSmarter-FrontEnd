import './App.css';
import { Route, Switch } from 'react-router-dom';
import UserContainer from './containers/UserContainer'
import QuestionContainer from './containers/QuestionContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
       <NavBar/>
    
    </div>
  );
}

export default App;
