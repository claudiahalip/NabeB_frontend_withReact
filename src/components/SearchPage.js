import React from 'react';
import '../css/SearchPage.css'
import {Button} from '@material-ui/core'


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage-info">
                <p>
                  test-test-test
                </p>
                <h1>Hire this business</h1>
                <Button 
                variant="outlined"
                >Cancellation Flexibility
                </Button>
                <Button 
                variant="outlined"
                >Type of place
                </Button>
                <Button 
                variant="outlined"
                >Price
                </Button>
                <Button 
                variant="outlined"
                >Room and beds
                </Button>
                <Button 
                variant="outlined"
                >More filters
                </Button>
           </div>
        </div>
    )
}

export default SearchPage
