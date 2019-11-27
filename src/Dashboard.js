import React, { Component } from 'react'
import Home from './Home';
import Register from './Register';

export default class Dashboard extends Component {
    constructor(props){
        super(props);

        this.setState = [];

        function Greeting(props){
            const isLoggedIn = props.isLoggedIn;
            if(isLoggedIn){
                return <Home />;
            } else{
                return <Register />
            }
        }
    }
    render() {
        
        return (
            <div>
                
            </div>
        )
    }
}
