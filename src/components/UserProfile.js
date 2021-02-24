import React, {Component} from 'react'
import NewProfilePhotoForm from '../components/NewProfilePhotoForm'


class UserProfile extends Component {
    render(){
        return(
            <div>
                <h1>TEST</h1>
                <div className="welcome-message">{`Welcome,  ${this.props.username}!`}</div>
                <NewProfilePhotoForm user_id = {this.props.user_id}/>
            </div>
        )
    }
}
export default UserProfile
