import React from 'react'
import {Component} from 'react'


class Neighbor extends Component{
    render(){
        return(
            <div>
               <h2>{this.props.neighborhood.name}</h2>
            </div>
        )
    }
}

export default Neighbor