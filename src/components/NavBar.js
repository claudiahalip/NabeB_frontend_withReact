import  { Component } from 'react';
import React from 'react'
import{Link} from 'react-router-dom' 


class NavBar extends Component {
    render (){
        return(
            <div>
                <div className="navbar">
                <Link to='/signup'>
                    <h3 className="navBarLinks">Sign up</h3>
                </Link>

                <Link to='/login'>
                    <h3 className="navBarLinks">Log in</h3>
                </Link>

                <Link to='/bussinesses'>
                    <h3 className="navBarLinks">Business</h3>
                </Link>

                <Link to='/neighborhoods'>
                    <h3 className="navBarLinks">Neighbors</h3>
                </Link>

                
                <Link to='/'>
                    <h3 className="navBarLinks">Home</h3>
                </Link>

                </div>

                {/* <form>
                    <input
                    placeholder="search for a business..."
                    name="search"></input>
                    
                </form> */}

            </div>
        )
    }
}

export default NavBar