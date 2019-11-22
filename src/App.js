import React from 'react';
import './App.css';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';
import Dashboard from './Dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Navbar from './Navbar';
// import Jumbotron from './Jumbotron';
// import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-info mt-1">
            <a className="navbar-brand text-white" href="/">BTS</a>
            <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
            <Link className="text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
            <Link className="text-white" to="/teachers">Teachers</Link>
                
                </li>
                <li className="nav-item">
            <Link className="text-white" to="/login">Login</Link>
                </li>
                <li className="nav-item">
            <Link className="text-white" to="/register">Register</Link><hr></hr>
              <Logout />
                {/* <a className="btn btn-sm btn-light" onClick="/login" role="button">Logout</a> */}
                </li>
              </ul>
            </div>
          </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        </div>

      </Router>

      <Dashboard />

    </div >
  );
}


export default App;
