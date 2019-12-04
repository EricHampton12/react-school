import React, { Component } from 'react'
import axios from 'axios';
import SupplyData from '../src/supplies.json'
import './style.scss';

export default class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dbList: []
        }
    }

    async componentDidMount() {
        const token = localStorage.getItem('user_token')
        const content = {
            headers: {
                'Authorization': "Bearer " + token
            }
        }
        const data = { id: JSON.parse(localStorage.getItem('user')).id }
        let uri = await 'https://backtoschool-260918.appspot.com/api/mylist/' + data.id;
        axios.get(uri, content, data).then((response) => {
            if (response.data != "") {
                this.setState({
                    dbList: response.data
                })

            }
        });
    }
    render() {
        return (
            this.state.dbList.length ?
                this.state.dbList.map((item, index) => {
                    var obj = JSON.parse(item);
                    var name = obj.name;
                    var desc = obj.description;

                    var supplies = obj.supplies;
                    return (
                        <div className="container mt-2 mb-2" key={index}>
                            <div className="card text-center">
                                <div className="card-body">
                                    <h3>{name}</h3>
                                    <ul>
                                        {supplies.map((supply, idx) => {
                                            return (
                                                <li key={idx} >                                            
                                                        <div class="checkbox">
                                                            <label>
                                                                <input type="checkbox" /><span className="checkbox-material mr-2"><span className="check"></span></span> {supply}
                                                            </label>
                                                            </div>                                           
                                                    </li>                                                   
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            )
                    }) : "loading..."
        
                )
            }
        }
        
        /*
        
                                        */
        
