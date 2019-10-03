import React, {Component} from 'react';
import { Table,Button} from 'antd';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import './component.css';
import {config} from './config/Config';

const { Column } = Table;


class Deltable extends Component{
    constructor(Props){
        super(Props);
        this.state = {
            items:[],
            isLoaded: false,
            placorder: [],
            totorder: null
        }
    }

    componentDidMount(){
        fetch(config.route+'/users')
        .then(res => res.json())
        .then(json => {
          let placorder=[]
          for(var i =0;i<json.length;i++){
              if( json[i].status === 0 || json[i].status === 1){
                  placorder.push(json[i])
              }
            }

          let newarr = []
          console.log(json);
          for( i =0;i<json.length;i++){
            if(json[i].status === 2){
              newarr.push(json[i])
            }
          }
          console.log(newarr);
          
            this.setState({
                isLoaded: true,
                items: newarr,
                placorder: placorder,
                totorder: json.length
            })
        });
    }
 
    render(){
        var {isLoaded, items} = this.state;
        if(!isLoaded){
          return  <div className="load">       
             <Button shape="circle" loading />
          </div>
        }
        else{
        
            return(
            <div className='tabo'>
            <Table dataSource={items}>
     <Column title="productId" dataIndex="productId" key="productId" />
      <Column title="Delivery Location" dataIndex="deliveryLocation" key="lastName" />
    <Column title="payment Mode" dataIndex="paymentMode" key="age" />
    <Column title="Barcode" dataIndex="barcode" key="address" />
    <Column
      title="Action"
      key="_id"
      dataIndex="_id"
      render={(_id) => (
        <span>
         <Link to={"/order/" + _id}> <Button >View More</Button></Link>
         </span>
      )}
    />
    
  </Table> 
  <div className="tabr">
       <div className="headtext ddtdt" >
         Overview
         
       </div>
       <div className="headtext">
         Orders Today 
         <p>{this.state.totorder}</p>
       </div>
       <div className="headtext">
         Pending Order 
         <p>{this.state.placorder.length}</p>
       </div>
       <div className="headtext">
         Delivered 
         <p>{this.state.items.length}</p>
       </div>
       <div className="headtext">
         Cancelled 
         <p>0</p>
       </div> 
     </div>
     </div>
        )
      }}
        
        
    }


export default Deltable;