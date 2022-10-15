
import { Video } from './components/Video';
import { useEffect, useState } from 'react';
import firebase from 'firebase'
import './App.css';
import { Login } from './components/Login';
import { useDispatch } from 'react-redux'
import { _login, _logout, _Data } from './Redux/actions'
import Newmainpage from "./components/NewMainpage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Questions  from "./components/Questrionanswer"
import ProctorChat from './components/ChatComponents/ProctorChat'

function App() {


  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch((_Data(user)))
        dispatch(_login())
      }
      else {
        dispatch(_logout())
      }
    })
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/exam">
          <Questions />
        </Route>
        <Route path="/chat">
          <ProctorChat />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Newmainpage />
        </Route>
      </Switch>  
    </Router>
  );
}

export default App;
