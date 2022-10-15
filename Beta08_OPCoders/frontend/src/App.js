import logo from './logo.svg';
import './App.css';
import { Mainpage } from './Components/Mainpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Prediction } from './Components/Prediction';
import Analytics from './Components/Analytics'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/predict">
          <Prediction />
        </Route>
        <Route exact path="/">
          <Mainpage />
        </Route>
        <Route path = "/analytics">
          <Analytics/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
