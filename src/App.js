import './App.css';
import { Route, Switch } from 'react-router-dom';
import UserContainer from './containers/UserContainer';
import QuestionContainer from './containers/QuestionContainer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/questions" component={QuestionContainer} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
