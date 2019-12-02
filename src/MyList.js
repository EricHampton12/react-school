import React, { Component } from 'react'
import { returnStatement } from '@babel/types';

export default class MyList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: "",
            list: []
        }
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    }

    addItem() {
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        const list = [...this.state.list];

        list.push(newItem);

        this.setState({
            list,
            newItem: ""
        });
    }
    deleteItem(id) {
        const list = [...this.state.list];

        const updatedList = list.filter(item => item.id !== id);

        this.setState({ list: updatedList });
    }
    render() {
        return (
            

            <div className="container mt-3 bg-light">
                <div className="row">
                    <div className="col-12">
                        <h2>
                            My Supplies
                        </h2>
                        <br />
                        <input
                            type="text"
                            placeholder="Type item here..."
                            value={this.state.newItem}
                            onChange={e => this.updateInput("newItem", e.target.value)}
                        />
                        <button className="btn btn-info ml-2"
                            onClick={() => this.addItem()}
                        >
                            Add Item
                        </button>
                        <br />
                        <ul>
                            {this.state.list.map(item => {
                                return (
                                    <li key={item.id}>
                                        {item.value}
                                        <button className="btn btn-danger mt-2 ml-5"
                                            onClick={() => this.deleteItem(item.id)}
                                        >
                                            X
                                </button>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

