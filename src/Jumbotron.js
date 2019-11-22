import React, { Component } from 'react'

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="container-fluid mt-3">
                <div className="jumbotron bg-light">
                    <h1 className="display-4 text-dark">Back to School</h1>
                    <p className="lead text-dark">Made Simple!</p>
                    <a className="btn btn-info text-light btn-md" href="/login" role="button">Login</a>
                    <a className="btn btn-info ml-4 text-light btn-md" href="/register" role="button">Register</a>
                </div>
            </div>
        )
    }
}
