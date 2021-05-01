
import { Component } from "react"
import React from 'react';
import axios from "axios"
import Banner from '../components/Banner'
import '../css/Home.css'
import Card from '../components/Card'
import '../css/Home.css'



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
                <Banner/>
                <div className="home-selection">
                    <Card
                    src="https://media.timeout.com/images/105649106/image.jpg"
                    title = "Chicago"
                    description="Chicago........."
                    price="$$$"
                    />
                    <Card
                    src=" https://media.timeout.com/images/105649106/image.jpg"
                    title = "Chicago"
                    description="Chicago........."
                    price="$$$"
                    />
                    
                    <Card
                    src ="https://media.timeout.com/images/105649106/image.jpg"
                    title = "Chicago"
                    description="Chicago........."
                    price="$$$"
                    />
                </div>
                <div className="home-selection">
                    <Card 
                    src="https://h7f7z2r7.stackpathcdn.com/sites/default/files/images/articles/chicago-1200.jpg"
                    title = "Chicago"
                    description="Chicago........."
                    price="$$$"
                    />
                    <Card
                    src = "https://h7f7z2r7.stackpathcdn.com/sites/default/files/images/articles/chicago-1200.jpg"
                    title = "Chicago"
                    description="Chicago........."
                    price="$$$"
                    />
                    <Card
                    src="https://h7f7z2r7.stackpathcdn.com/sites/default/files/images/articles/chicago-1200.jpg"
                    title = "Chicago"
                    description="Chicago........."
                    price="$$$"
                    />
                </div>
                
               
                
                
            </div>
        )
    }

}

export default Home