import React, { Component } from 'react'
import axios from 'axios';
import SupplyData from '../src/supplies.json';



export default class Logout extends Component {
    
    logout(e) {
        const token = localStorage.getItem('user_token')
        const content = {
            headers: {
                'Authorization':"Bearer " + token
            }
        };
        let uri = 'https://backtoschool-260918.appspot.com/api/logout';
        axios.get(uri, content).then((response) => {
            window.location.href="/login";
        });
        localStorage.removeItem('user_token');
        var data = SupplyData.data[e.target.id];
        localStorage.removeItem('MySupplyList', data);
        localStorage.removeItem('user');
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

