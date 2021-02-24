import React from 'react' ;
import {Component} from 'react'
import image from '../images/raisl_project_image01.jpg'

class NewProfilePhotoForm extends Component {
    state ={
        image: null
    }

    onChange = (e) =>{
        console.log(e.target.files[0].name)
        e.persist()
        this.setState(()=>{
            return{
               image: URL.createObjectURL(e.target.files[0])
            }
        })
    }

    displayPhoto = ()=> {
        
        return (
            <img src={image} alt=""></img>
        )
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log("I ve been clicked")
        this.displayPhoto()
        // const form = new FormData()
        // form.append("image", this.state.image);
        // form.append("user_id", this.props.user_id);
        // fetch("http://localhost:3001/profilephotos", {
        //     method: "POST",
        //     body: form
        // })
    }

   render(){
       return(
           <div className="form-profile-photo">
               
               {/* <form onSubmit= {this.onSubmit}>
                   <label>Image Upload</label> */}
                   <input type ="file" name = "image" onChange={this.onChange}></input>
                   {/* <input type="submit" value="Upload"></input> */}
                   <img src={this.state.image} alt=""></img>
               
           </div>
       )
   }
}

export default NewProfilePhotoForm