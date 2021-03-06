import React, { Component } from 'react'
import axios from 'axios';



export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password: '', token: '', user: null };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange1(e) {
        this.setState({
            name: e.target.value

        })
        console.log("holy");
    }
    handleChange2(e) {
        this.setState({
            email: e.target.value
        })
        console.log("crap");
    }
    handleChange3(e) {
        this.setState({
            password: e.target.value
        })
        console.log("it works");
    }
    handleSubmit(e) {
        e.preventDefault();
        const content = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        let uri = 'http://127.0.0.1:8000/api/register';
        axios.post(uri, content).then((response) => {
            console.log(response.data);
            if (response.data != "") {
                this.setState({
                    token: response.data.token,
                    user: response.data.user
                })
            }
        });
    }
    render() {
        return (
            <div className="container mt-5 mb-2 bg-light">
                <div className="row">
                    <div className="col-12 mt-4">
                        <h3 className="text-dark text-center">Register</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input onChange={this.handleChange1} type="name" className="form-control text-dark" placeholder="First and Last Name" />
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleChange2} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleChange3} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group form-check">
                                <button type="submit" className="btn btn-info mb-3">Make Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
