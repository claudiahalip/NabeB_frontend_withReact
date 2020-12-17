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

    handleChange = (event)=>{
       this.setState({
           [event.target.name]: event.target.value
       })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {username, email, password} = this.state
        let user = {
            username: username,
            email: email,
            password: password
        }

        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
        .then(response =>{
            if(response.data.logged_in){
                this.props.handleLogin(response.data)
                this.redirect()
            }else{
                this.setState({
                    errors: response.data.errors
                })
            }
        })
        .catch(console.log('api errors:', this.errors))
    }

    redirect = ()=>{
       this.props.history.push('/') 
    }

    handaleErrors = ()=>{
        return (
            <div>
              <ul>
              {this.state.errors.map(error => {
              return <li key={error}>{error}</li>
                })}
              </ul>
            </div>
          )
    }


    render(){
        return(
            <div>
                <form onSubmit= {this.handleSubmit}>
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
                    <button placeholder="submit" type="submit">
                        Log in
                    </button>
                </form>
                <div>
                {this.state.errors ? this.handleErrors() : null }
                </div>
            </div>
        )
    }
}

export default Login
