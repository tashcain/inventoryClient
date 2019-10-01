import React, { Component } from 'react';
import { Table,Button } from 'antd';
import {Link} from 'react-router-dom';

const { Column } = Table;

export default class Shipper1 extends Component {
  

  constructor(props){
    super(props)

    this.state={
      data:this.props.data
      // data : [
      //   {
      //     key: '1',
      //     Shipper: 'Delhivery',
      //     mode: 'Road',
      //     time: '3 days',
      //     shippingRates:'Rs.'+1*this.props.distance
      //   },
      //   {
      //     key: '2',
      //     Shipper: 'DHL',
      //     mode: 'Road',
      //     time: '2 days',
      //     shippingRates: 'Rs.'+2*this.props.distance
      //   },
      // ]

    }

    this.select = this.select.bind(this);
  }
  

  select(e){
    console.log(e.target.id);
  }

    render(props) {
          if(!this.props.show){
                return(
                    <div>     <Table dataSource={this.state.data}>
       
       <Column title="Shipper"  key="firstName" />
     
     <Column title="Mode"  key="age" />
     <Column title="Expected Time"  key="address" />
     <Column title="Shipping Rates"  key="rates" />
         
     
   </Table>
   </div>
                )
        }
        else{
            return (
                <div>
                       <Table dataSource={this.state.data}>
       
         <Column title="Shipper" dataIndex="Shipper" key="Shipper" />
       
       <Column title="Mode" dataIndex="mode" key="mode" />
       <Column title="Expected Time" dataIndex="time" key="time" />
       <Column title="Shipping Rates" dataIndex="shippingRates" key="rates" />
           
       <Column
      title="Action"
      key="action"
      dataIndex="key"
      render={(key) => (
        <span>
        <Link to="#">  <Button type='primary' id={key} onClick={this.select}>Select</Button></Link>
        </span>
      )}
    />
     </Table>
                       </div>
               
           )
        }
      
    }
}
