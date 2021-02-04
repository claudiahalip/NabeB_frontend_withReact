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
             <div className="component-title">Businesses</div>
             <div className="wrapper">
                {this.renderBusinesses()}
             </div>
           </div>
         )
     }
}
    



 export default Businesses