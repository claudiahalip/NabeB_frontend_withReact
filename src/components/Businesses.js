import React, {Component} from 'react'
import {connect} from 'react-redux'
import { fetchBusinesses } from '../actions/businessesActions'


class Businesses extends Component {

    componentDidMount(){
        this.props.fetchBusinesses();
    }
     render(){
         return(
             <div>
             </div>
         )
     }
}
    


const mapStateToProps = (state)=>{
    console.log(state)
    return state
    
}

 export default connect(mapStateToProps,{fetchBusinesses} )(Businesses)