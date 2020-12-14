import React from 'react'
import { Component} from 'react'
import axios from 'axios'

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            password_confirmation: ""
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="username"
                    type = "text"
                    name="username"
                    value = {this.username}
                    onChange = {this.handleChange}
                ></input>
                <br></br>
                <input
                    placeholder = 'mail'
                    type="text"
                    name = 'email'
                    value = {this.email}
                    onChange = {this.handleChange}
                ></input>
                <br></br>
                <input
                    placeholder="password"
                    type = 'password'
                    name="password"
                    value = {this.password}
                    onChange = {this.handleChange}
                ></input>
                <br></br>
                <input
                    placeholder="password confirmation"
                    type = 'text'
                    name="password_confirmation"
                    value = {this.password_confirmation}
                    onChange = {this.handleChange}
                ></input>
                <br></br>
                <button
                placeholder="submit"
                type = "submit">Sign up</button>
                </form>

            </div>
        )
    }
}
export default Signup