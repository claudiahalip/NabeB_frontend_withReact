import React, {useState} from 'react'
import '../css/Banner.css';
import {Button} from '@material-ui/core'

function Banner() {
    
    const [showSearch, setShowSearch]= useState
    (false);

    return (
        <div className="banner">
            <div className="banner-search">
                {showSearch && <h5>SHOW DATE PICKER</h5>}
                <Button onClick={()=>
                setShowSearch(!showSearch)}
                className="banner-searchButton"
                variant="outlined">
                    Search Dates
                </Button>

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
