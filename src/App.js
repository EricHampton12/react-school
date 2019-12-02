import React from 'react';
import './App.css';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';
import Dashboard from './Dashboard';
import Grades from './Grades';
import Footer from './Footer';
import MyList from './MyList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// import Navbar from './Navbar';
// import Jumbotron from './Jumbotron';
// import Login from './Login';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.GetToken = this.GetToken.bind(this);

  }
  GetToken() {
    const UserToken = window.localStorage.getItem('user_token');
      this.setState({UserToken: UserToken});

  }

  componentDidMount(){
    this.GetToken();
}
  render() {
  return(
    <div className = "App" >
    
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-info mt-1">
            <a className="navbar-brand text-white text-small" href="/">Back to School</a>
            <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="text-white" to="/"><i className="fas fa-home"></i>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="text-white" to="/dashboard">Dashboard</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="text-white" to="/schoolSupplies">School Supplies</Link>

                </li> */}
                {/* <li className="nav-item">
                  <Link className="text-white" to="/login">Login</Link>
                </li> */}
                
                <Logout /> 
                {/* <li className="nav-item">
                  <Link className="text-white" to="/register">Register</Link><hr></hr>
                  {/* <a className="btn btn-sm btn-light" onClick="/login" role="button">Logout</a> */}
                {/* </li> */}
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />

            </Route>
            <Route path="/login">
              
              {this.state.UserToken ? 
              <Redirect to="/dashboard" /> : 
              <Login GetToken={this.GetToken} />}
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/grades">
              <Grades />
            </Route>
            <Route path="/mylist">
              <MyList />
            </Route>
          </Switch>
        </div>

      </Router>



    </div >
  );
}
}


export default App;
