import React, {Component} from 'react';
import { Table,Button } from 'antd';
import {Link} from 'react-router-dom';
import './component.css';

const { Column } = Table;


class RecTable extends Component{
    constructor(Props){
        super(Props);
        this.state = {
            items:[],
            isLoaded: false,
            delorder: [],
            placorder: []
        }

    }

    componentDidMount(){
        fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(json => {
            let placorder=[]
            for(var i =0;i<json.length;i++){
                if(json[i].status === 0 || json[i].status === 1){
                    placorder.push(json[i])
                }
              }
              let delorder = []
              for(var j =0;j<json.length;j++){
                if(json[j].status === 2){
                  delorder.push(json[j])
                }
              }
                this.setState({
                isLoaded: true,
                items: placorder,
                delorder: delorder,
                placorder: placorder
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
          console.log(items)
            return(
            <div className='App'>
            <Table dataSource={items}>
     <Column title="productId" dataIndex="productId" key="productId" />
      <Column title="Delivery Location" dataIndex="deliveryLocation" key="lastName" />
    <Column title="payment Mode" dataIndex="paymentMode" key="age" />
    <Column title="Barcode" dataIndex="barcode" key="address" />
    <Column
      title="Action"
      key="action"
      dataIndex="_id"
      render={(_id) => (
        <span>
        <Link to={"/order/" + _id}> <Button  type="primary">Response</Button></Link>
        </span>
      )}
    />
    
  </Table> 
     </div>
        )}}
        
        
    }


export default RecTable;