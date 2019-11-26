import React, { Component } from 'react'
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', token: '', user: null };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleChange1(e) {
    this.setState({
      email: e.target.value
    })
  }
  handleChange2(e) {
    this.setState({
      password: e.target.value
    })
  }

  
  async handleSubmit(e) {
    e.preventDefault();
    const content = {
      email: this.state.email,
      password: this.state.password
    }
    let uri = 'http://127.0.0.1:8000/api/login';
    await axios.post(uri, content).then((response) => {
      console.log(response.data);
      if (response.data != "") {
        this.setState({
          token: response.data.token,
          user: response.data.user
        })
        localStorage.setItem('user_token', response.data.token);
        alert("You are logged in!");
      } else {

        alert("User Not Found");
      }
    });
  }

  render() {
    return (
      <div className="container mt-3 bg-light">
        <h2 className="text-dark">Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label className="text-dark">Email:</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange1} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label className="text-dark">Password:</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange2} />
              </div>
            </div>
          </div><br />
          <div className="form-group">
            <button className="btn mb-4 btn-info" href="/">Login</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Login;