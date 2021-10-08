import './App.css';
import { Route, Switch } from 'react-router-dom';
import UserContainer from './containers/UserContainer';
import QuestionContainer from './containers/QuestionContainer';
import QuizContainer from 'containers/QuizContainer';
function App() {
  return (
    <div className="App">
      <Switch>
      {/* <Route exact path="/" component={Home} /> */}
        <Route path="/questions" component={QuestionContainer} />
        <Route component={Error} />
              {/* <QuestionContainer /> */}
      </Switch>
//       <QuestionContainer />
    </div>
  );
}

export default App;
