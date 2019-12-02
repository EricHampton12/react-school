import React, { Component } from 'react'
import axios from 'axios';

export default class Logout extends Component {
//    constructor(props){
//        super(props);
//        this.state = this.state
//    }
   
    
    logout() {
        const token = localStorage.getItem('user_token')
            console.log("something");
        const content = {
            headers: {
                'Authorization':"Bearer " + token
            }
        };
        let uri = 'http://127.0.0.1:8000/api/logout';
        axios.get(uri, content).then((response) => {
            console.log(response.data);
            window.location.href="/login";
        });
        localStorage.removeItem('user_token');
    }
    render() {
        return (
           
            <div>
                <button className="btn btn-info" onClick={this.logout} href="/login" role="button">Logout
                </button>
            </div>
        )
    }
}

