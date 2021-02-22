import React from 'react'
import image_logo from '../images/fake-logo.jpg'
import '../css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className="header">
            <div className="header-left">
            <img className="image-logo"
            src={image_logo}
            alt=""
            ></img>
            <h1>Nabe B</h1>
            </div>
            <div className="header-center">
                <input type="text"></input>
                <SearchIcon/>
            </div>
            <div className="header-right">
               <AccountCircleIcon/>
            </div>

            
        </div>
    )
}

export default Header
