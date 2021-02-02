import React, {Component} from 'react';
import Business from './Business'


class Businesses extends Component {


   renderBusinesses = () => {
    console.log(this.props.businesses);
    let businesses = this.props.businesses
      return businesses.map( business =>{
       return <Business business = {business} key={business.id} />
     })
   }
    

     render(){
         return(
             <div>
                 <h1>Businesses</h1>
                 {this.renderBusinesses()}
             </div>
         )
     }
}
    



 export default Businesses