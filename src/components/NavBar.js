import  { Component } from 'react';
import React from 'react'
import{Link} from 'react-router-dom' 


class NavBar extends Component {
    render (){
        return(
            <div>
                <div className="navbar">
                <Link to='/'>
                    <h3 className="navBarLinks">Home</h3>
                </Link>

                <Link to='/bussiness'>
                    <h3 className="navBarLinks">Bussines</h3>
                </Link>

                <Link to='/beighborhoods'>
                    <h3 className="navBarLinks">Neighbors</h3>
                </Link>

                <Link to='/login'>
                    <h3 className="navBarLinks">Log in</h3>
                </Link>


                </div>

            </div>
        )
    }
}

export default NavBar