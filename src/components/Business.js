import { Component } from "react"
import React from 'react';

class Business extends Component{
    render(){
        return(
            <div className="scrolling-wrapper">
            <div className = "businessCard">
                <h2>{this.props.business.name}</h2>
                <a className="description" >{this.props.business.phone_number}</a>
            </div>
            </div>
        )
    }
}
export default Business