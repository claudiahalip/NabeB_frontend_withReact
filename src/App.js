import React from 'react'
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Component } from 'react';
import Login from './components/Login';
import Signup from  './components/Signup';
import NeighborsContainer from './containers/NeighborsContainer';
import BusinessesContainer from './containers/BusinessesContainer';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage'



class  App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
        user: {}
      }
  }

  

  componentDidMount() {
    this.loginStatus()
    }


    handleLogin = (data) => {
      //console.log(data)
      this.setState({
        isLoggedIn: true,
        user: data.user
      })
      console.log(this.state.user.username)
    }
    

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})
    .then(response => {
      console.log(response.data.user)
      if (response.data.logged_in) {
        this.handleLogin(response.data)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }


  

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  render(){
    return (
      <div>
        
       <React.StrictMode>
       <Router>
         <Header/>
         <NavBar loggedInStatus={this.state.isLoggedIn}/>
       
       
       <Switch>
            <Route exact path ="/">
              <Home  handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
            </Route> 
            <Route exact path = '/businesses' render = {props => (
              <BusinessesContainer {...props} loggedInStatus= {this.state.isLoggedIn}/>
            )}
            />
            <Route exact path = '/neighborhoods' render = {props => (
              <NeighborsContainer { ...props} loggedInStatus = {this.state.isLoggedIn}/>
            )}
            />
  
            <Route exact path='/login' render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />

            <Route exact path='/signup' render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route exact path='/userprofile' render = {props=> (
              <UserProfile {...props} loggedInStatus = {this.state.isLoggedIn} test = "Claudia" username = {this.state.user.username} user_id={this.state.user.id}/>
            )}
              />
            <Route exact path = "/search">
              <SearchPage/>
            </Route>

            
            
        </Switch>
        <Footer/>
        
        
       
      </Router>
      </React.StrictMode>
      </div>
    );
  } 
}

export default App;
