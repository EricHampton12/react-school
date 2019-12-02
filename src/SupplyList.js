import React, { Component } from 'react';
import SupplyData from '../src/supplies.json'





export default class SupplyList extends Component {


    render() {
        console.log(SupplyData);
        return (
            <div>
                {SupplyData.data.map((supplyList, index) => {
                    //console.log(supplyList);
                    return (
                        <>
                            <h4 className="text-info">{supplyList.name}</h4>
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
                                    <a href="/mylist" className="btn btn-info btn-sm ml-4">Save List</a>
                                </div>
                            </div>
                        </>)
                })}
            </div>
        )
    }
}
