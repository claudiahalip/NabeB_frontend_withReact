import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNeighborhoods} from '../actions/neighborhoodsActions'
import Neighbors from '../components/Neighbors'

class NeighborsContainer extends Component {

    componentDidMount(){
        this.props.fetchNeighborhoods();
    }

    render (){
        return(
            <div>
                <Neighbors neighborhoods = {this.props.neighborhoods}/>
           </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state.neighborhoodReducer.neighborhoods)
    return state.neighborhoodReducer
}

export default connect(mapStateToProps, {fetchNeighborhoods}) (NeighborsContainer);