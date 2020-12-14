import React from 'react' 
import{Component} from 'react'
import axios from 'axios'

class Login extends Component {

    constructor (props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            errors: ""
        }
    }


    render(){
        return(
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <input
                    placeholder="username"
                    type = "text"
                    name="username"
                    value = {username}
                    onChange = {this.handleChange}
                    ></input>
                    <br></br>
                    <input
                    placeholder = 'mail'
                    type="text"
                    name = 'email'
                    value = {email}
                    onChange = {this.handleChange}
                    ></input>
                    <br></br>
                    <input
                    placeholder="password"
                    type = 'password'
                    name="password"
                    value = {password}
                    onChange = {this.handleChange}
                    ></input>
                    <br></br>
                    
                </form>

            </div>
        )
    }
}

export default Login
