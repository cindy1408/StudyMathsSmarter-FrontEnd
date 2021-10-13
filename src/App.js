import './App.css';
import { Route, Switch } from 'react-router-dom';
import QuestionContainer from './containers/QuestionContainer';
import Results from './components/Results';
import ComingSoon from './components/ComingSoon';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/questions" component={QuestionContainer} />
        <Route path="/results" component={Results} />
        <Route path="/comingSoon" component={ComingSoon} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
