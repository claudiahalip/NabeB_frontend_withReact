
import { Component } from "react"
import React from 'react'
import image from '../images/raisl_project_image01.jpg'
import axios from "axios"
import Banner from '../components/Banner'



class Home extends Component{

    handleLogoutClick = () => {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
        .then(response => {
            
            this.props.handleLogout()
        })
        .catch(error => {
            console.log("logout error", error)
        })
       
    }

    render(){
        return(
            <div>
                <div >
                {this.props.loggedInStatus && <button onClick = {this.handleLogoutClick}>Logout</button>}
                </div>
                {/* <Banner/>
                <div className="home-selection">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="home-selection">
                    <Card/>
                    <Card/>
                    <Card/>
                </div> */}
                

               
                
                
            </div>
        )
    }

}

export default Home