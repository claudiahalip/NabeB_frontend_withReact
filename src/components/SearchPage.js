import React from 'react';
import '../css/SearchPage.css';
import {Button} from '@material-ui/core';
import SearchResult from '../components/SearchResult';

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
           <SearchResult
            img="https://h7f7z2r7.stackpathcdn.com/sites/default/files/images/articles/chicago-1200.jpg" 
            location="Chicago"
            title="choose this location"
            description="blablbabalajdybksdkh b   fth sc " 
            star={4.75}
            price="$$/per hour"
            total="approx$$$$"
           />

        <SearchResult
            img="https://h7f7z2r7.stackpathcdn.com/sites/default/files/images/articles/chicago-1200.jpg" 
            location="Chicago"
            title="choose this location"
            description="blablbabalajdybksdkh b   fth sc " 
            star={4.75}
            price="$$/per hour"
            total="approx$$$$"
           />
        </div>
    )
}

export default SearchPage
