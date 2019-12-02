import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Login from './Login'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        // window.localStorage.getItem('user_token');
        // if (localStorage.getItem("user_token") === null) {
        //     //...
        // }
        // if it exists show the dashboard component
        // if it doesn't exist show the normal 
        return (
            <div className="container mt-3 mb-2">
                <div className="row">
                    <div className="col-12">
                        <Jumbotron />
                    </div>
                </div>

            </div>
        )
    }
}
export default Home;
