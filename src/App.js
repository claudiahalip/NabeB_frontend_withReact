import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Component } from 'react';

class  App extends Component {
  constructor (props) {
      super(props);
      this.stare = {
        isLoggedIn= false,
        user: {}
      }
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }


  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
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
        <Switch>

          <Route exact path='/' component={}/>
          <Route exact path='/login' component={}/>
          <Route exact path='/signup' component={}/>

        </Switch>
        <Home/>
        <NavBar/>
      </Router>
      </React.StrictMode>
      </div>
    );
  } 
}

export default App;
