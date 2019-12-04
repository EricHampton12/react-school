import React, { Component } from 'react'


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="myContainer container-fluid bg-info">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-5 text-white">Dashboard</h1>
                        </div>
                    </div>
                </div>
                <div className="Container mt-3">
                    <div className="row">
                        <div className="col-12"><div className="card-group">
                            <div className="card mt-2 mb-5 ml-2 mr-1">
                                <div className="card-body">
                                    <h5 className="card-title">Grade Levels</h5>
                                    <p className="card-text">Click below for a list of grades, and the list of supplies needed.</p>
                                </div>
                                <div className="card-footer">
                                    <a className="btn btn-info" href="/grades">Search Supplies</a>
                                   
                                </div>
                            </div>
                            <div className="card ml-2 mr-1 mt-2 mb-5">
                                <div className="card-body">
                                    <h5 className="card-title">My Lists</h5>
                                    <p className="card-text">My saved lists.</p>
                                </div>
                                <div className="card-footer">
                                    <a className="btn btn-info" href="/mylist">View</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



