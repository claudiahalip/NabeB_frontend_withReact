import React, {useState} from 'react'
import '../css/Banner.css';
import {Button} from '@material-ui/core'
import SearchDate from '../components/SearchDate'
function Banner() {
    
    const [showSearch, setShowSearch]= useState
    (false);

    return (
        <div className="banner">
            <div className="banner-search">
                
                <Button onClick={()=>
                setShowSearch(!showSearch)}
                className="banner-searchButton"
                variant="outlined">
                 {showSearch ? "Hide" : "SearchDate"}
                </Button>
                {showSearch && <SearchDate/>}

            </div>
            <div className="banner-info">
                <h2>Come and explore your neighborhood!</h2>
                <h5>Local businesses and services from the people down the block.</h5>
                <Button
                variant="outline"
                >Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
