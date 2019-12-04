import React, { Component } from 'react'
import Jumbotron from './Jumbotron'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    render() {
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
