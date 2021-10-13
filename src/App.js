import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import gcse from './pages/gcse';
import igcse from './pages/igcse';
import asLevel from './pages/asLevel';
import aLevel from './pages/aLevel';
import homePage from './pages/homePage';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
       
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
    </div>
  );
}

export default App;
