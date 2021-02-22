
import { Component } from "react"
import React from 'react'
import image from '../images/raisl_project_image01.jpg'
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
                    src=" https://cdn.choosechicago.com/uploads/2020/05/AM_Bean-e1589998253183-1800x832.jpg"
                    title = "Chicago"
                    description="Chicago........."
                    price="$$$"
                    />
                    
                    <Card
                    src ="https://s3-prod.chicagobusiness.com/s3fs-public/editorial-chicago-WEB_i.jpg"
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
                    src = "https://www.northcentralcollege.edu/sites/default/files/styles/full_image_large/public/chicago_full_image.jpg?h=c1eb06c9&itok=q7OL573H"
                    title = "Chicago"
                    description="Chicago........."
                    price="$$$"
                    />
                    <Card
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO855n-EbQyjs-QvPmK-t2QaqW0UdRHi3U3g&usqp=CAU"
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