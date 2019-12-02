import React, { Component } from 'react'
import SupplyList from './SupplyList'

export default class Grades extends Component {
    render() {
        return (
            <div className="container bg-light mt-3">
                <div className="row">
                    <div className="col-12">
                                <SupplyList />
                             
                        </div>
                    </div>
                </div>
            // </div>
        )
    }
}
