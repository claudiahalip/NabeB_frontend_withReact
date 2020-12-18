
import { Component } from "react"
import React from 'react'
import {Route} from 'react-router-dom'
import axios from "axios"


class Home extends Component{

    handleLogoutClick = () => {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
        .then(response =>{
            this.props.handleLogout()
        })
        .catch(error => {
            console.log("logout error", error)
        })
       
    }




    render(){
        return(
            <div>
                 <Route exact  path = '/'>
                <div className ='header'>
                <h1>NABE B</h1>
                <button onClick = {this.handleLogoutClick}>Logout</button>
                </div>
                </Route>
                
                
            </div>
        )
    }

}

export default Home