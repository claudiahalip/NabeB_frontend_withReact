
import { Component } from "react"
import React from 'react'
import {Route} from 'react-router-dom'

class Home extends Component{

    render(){
        return(
            <div>
                 <Route exact  path = '/'>
                <div class='header'>
                <h1>NABE B</h1>
                </div>
                </Route>
                
                
            </div>
        )
    }

}

export default Home