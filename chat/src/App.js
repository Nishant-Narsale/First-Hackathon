import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import ProctorChat from './components/ProctorChat';
import StudentChat from './components/StudentChat';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact><Main /></Route>
          <Route path="/login" exact><Login /></Route>
          <Route path="/proctor-chat" exact><ProctorChat /></Route>
          <Route path="/student-chat" exact><StudentChat /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
