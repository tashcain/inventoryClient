import React, { Component } from 'react';
import Shipper1 from './shipper1';
import './shipper.css';
import {Input} from 'antd';






export default class Shipper extends Component {
constructor(props){
    super(props);
    this.state={
        data:this.props.data,
        // distance:Math.floor(100 + Math.random() * 900),
        show: false,
        
    }
    // this.distance = this.distance.bind(this);
    this.Go = this.Go.bind(this);
}




// distance(e){
//     this.setState({
//         distance: e.target.value
//     })   
// }

Go(){
    this.setState({
        show:true
    })
}



 render() {
   

     
          return (
            
                <div>
                    <div className="location">
                       <span>Distance</span>
                       <div className="sec">
                           <div className="sec1">
                             <h1>PickUp Address</h1>
                             <Input/>
                        </div>
                           <div className="sec2">
                           <h1>Delivery Address</h1>
                             <Input/>
                           </div>
                           <div className='button'>
                           <button style={{width:'200px'}} onClick={this.Go}>Go</button>
                           </div>
                       </div>
                    </div>
                    <Shipper1 show={this.state.show} data={this.state.data}/>
                  
        </div>
            
        )

   }
}

   
 