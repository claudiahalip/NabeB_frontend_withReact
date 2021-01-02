import React, {Component} from 'react'

class UserProfile extends Component {

    state = {
        image: {}
    }
    
    componentDidMount(){
        return console.log(this.props.user, this.props.user.username, this.props.user.id)
        
    }

   

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
       e.preventDefault()
       const form = new FormData()
        form.append("image", this.state.image)
        form.append("video", this.state.video)
        fetch(`http://localhost:3001/items`, {
            method: "POST",
            body: form
        })
    }

    
    render(){
        

        return(
            <div>
                <h1>TEST</h1>
                <form onSubmit= {this.handleSubmit} >
                    <input
                    onChange = {this.handleOnChange}
                    name = 'image'
                    type = 'file'
                    accept="image/png, image/jpeg"
                    >
                    </input>
                    <input type="submit"
                    value = "Upload"
                    ></input>
                </form>
            
            </div>
        )
    }
}
export default UserProfile
