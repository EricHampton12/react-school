import React, { Component } from 'react'
import Jumbotron from './Jumbotron'

class Home extends Component {
    render() {
        return (
            <div className="container mt-5 mb-2">
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
