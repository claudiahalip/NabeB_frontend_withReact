import React, { Component } from "react";
import Neighbor from './Neighbor'

class Neighbors extends Component {
    
    renderNeighborhoods =()=>{
        const neighborhoods = this.props.neighborhoods
        return neighborhoods.map( neighborhood =>{
            return( <Neighbor neighborhood ={neighborhood} key={neighborhood.id}/>)
        })
    }


    render () {
        return(
            <div>
             Test Neighbors
             {this.renderNeighborhoods()}
            </div>
        )
    }
}
export default Neighbors