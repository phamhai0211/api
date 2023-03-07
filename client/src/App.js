import logo from './logo.svg';
import './App.css';
import Home from './page/Home/Home'
import Watch from './page/watch/Watch'
import Register from './page/register/Register';
import Login from './page/login/Login';
import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
function App() {
  //const user = useContext()
  return (
    <Router>
      <Switch>
        <Route exact path="">
          <Home />
        </Route>
        <Route path="/login"><Login/></Route>
        <Route path="/register">
          <Register/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
