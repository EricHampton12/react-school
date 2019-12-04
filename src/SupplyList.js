import React, { Component } from 'react';
import SupplyData from '../src/supplies.json'
import axios from 'axios';

export default class SupplyList extends Component {
    constructor(props) {
        super(props);
        this.saveSupplyList = this.saveSupplyList.bind(this);
    }
    saveSupplyList(e) {
        var data = SupplyData.data[e.target.id];

        var user = JSON.parse(localStorage.getItem('user'));
        localStorage.setItem('MySupplyList', JSON.stringify(data));

        const token = localStorage.getItem('user_token');
        const config = {
            headers: {
                'Authorization': "Bearer " + token
            }
        };
        const content = {
            name: user.name,
            mylists: JSON.stringify(data),
            user_id: user.id
        }
        let uri = 'http://127.0.0.1:8000/api/savelist';
        // console.log(headers);
        axios.post(uri, content, config).then((response) => {
            console.log(response.data);
        });
    }
    render() {
        console.log(SupplyData);
        return (
            <div>
                {SupplyData.data.map((supplyList, index) => {
                    return (
                        <>
                            <h4 className="text-info mt-2">{supplyList.name}</h4>
                            <div className="card text-center">
                                <div className="card-body">
                                    <ul>
                                        {supplyList.supplies.map((item, index) => {
                                            return (
                                                <li>
                                                    {item}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <button id={index} onClick={this.saveSupplyList} className="btn btn-info btn-sm ml-4">Save List</button>
                                </div>
                            </div>
                        </>)
                })}
            </div>
        )
    }
}
