import React, {Component} from 'react';
import {connect } from 'react-redux';
import { fetchBusinesses } from '../actions/businessesActions'
import Businesses from '../components/Businesses'

class BusinessesContainer extends Component{

    componentDidMount(){
        this.props.fetchBusinesses();
    }



    render(){
        return(
            <div>
               <Businesses businesses= {this.props.businesses} />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    
    console.log(state.businessReducer)
    return state.businessReducer
}
export default connect(mapStateToProps, {fetchBusinesses} )(BusinessesContainer)