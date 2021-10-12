import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContainer from './containers/UserContainer'
import QuestionContainer from './containers/QuestionContainer';
import NavBar from './components/NavBar.js';
import gcse from './pages/gcse';
import igcse from './pages/igcse';
<<<<<<< HEAD
import Footer from './components/Footer';
import asLevel from './pages/asLevel';
import aLevel from './pages/aLevel';
<<<<<<< HEAD
import homePage from './pages/homePage';
=======
=======
import asLevel from './pages/asLevel';
import aLevel from './pages/aLevel';
import Footer from './components/Footer';


>>>>>>> ada738768dc9d5045201fc6aa6de2593f0a756dc
>>>>>>> dd7a5df9f71f1a162315d8cbc87d625a5bfece9f

function App() {
  return (
    <div className="App">
       
       <Router>
      <div className="app">
      <NavBar/>
        <Switch>
<<<<<<< HEAD
          <Route path="/" component={homePage} exact/>
          <Route path="/homePage" component={homePage} exact/>
          <Route path="/gcse" component={gcse} exact/>
          <Route path="/igcse" component={igcse} exact/>
          <Route path="/asLevel" component={asLevel} exact/>
          <Route path="/aLevel" component={aLevel} exact/>
=======
<<<<<<< HEAD
          <Route path="/gcse" component={gcse}/>
          <Route path="/igcse" component={igcse}/>
          <Route path="/asLevel" component={asLevel}/>
          <Route path="/aLevel" component={aLevel}/>
>>>>>>> dd7a5df9f71f1a162315d8cbc87d625a5bfece9f
        </Switch>
      <Footer/>  
=======
          
          <Route path="/gcse" component={gcse}/>
          <Route path="/igcse" component={igcse}/>
          <Route path="/as-level" component={asLevel}/>
          <Route path="/a-level" component={aLevel}/>


        </Switch>
        <Footer/>


>>>>>>> ada738768dc9d5045201fc6aa6de2593f0a756dc
      </div>
    </Router>
    </div>
  );
}

export default App;
