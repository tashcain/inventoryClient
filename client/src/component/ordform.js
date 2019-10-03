import React, { Component } from 'react';
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,   
  } from 'antd';
import axios from 'axios';
import './component.css';
import {config} from './config/Config';


// const {TextArea} = Input;
//   const { Option } = Select;
//   const AutoCompleteOption = AutoComplete.Option;

 class Ordform extends Component {
  
  constructor(){
      super();
     
     this.state={
        productId:null,
        delloc:null,
        phn:null,
        paymo:null,
        price:null,
        barcode:null
    }
    this.setvalue= this.setvalue.bind(this);
    this.saveData= this.saveData.bind(this);
    this.handlebarcode= this.handlebarcode.bind(this);
  }

   setvalue(e){
    this.setState({
        [e.target.id]:e.target.value
    })
}
    
handlebarcode(value){
        console.log(value)
      this.setState({
        barcode:value,
      })  
    }

   
   saveData(){
    axios.post(config.route+'/gotData',{
       productId:this.state.productId,
       delloc:this.state.delloc,
       phn:this.state.phn,
       paymo:this.state.paymo,
       price:this.state.price,
       barcode:this.state.barcode

    })
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    })

    }
    render() {
        
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 12 },
          sm: { span: 12 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      
      const InputGroup = Input.Group;
const { Option } = Select;
        return (
            <div>
         <div className="ordform">
         <Form className="form" {...formItemLayout} >
          <Form.Item label={<span>
                productId
               </span>}>
          <Row>
        <Col span={2}></Col>    
      <Col span={8}><Input id="productId" onChange={this.setvalue}/></Col>
    </Row>
        </Form.Item>
          <Form.Item
            label="Delivery Location"
          >
            {(<Input id="delloc" onChange={this.setvalue} />)}
          </Form.Item>
          <Form.Item label="Phone Number">
              <Input id="phn" onChange={this.setvalue}/>
         </Form.Item>
          <Form.Item label="Payment Mode">
            {(<Input id="paymo" onChange={this.setvalue} style={{ width: '100%' }} type= "Email" />)}
          </Form.Item>
          <Form.Item label="Price" type="Number">
            {
                <Input id="price" onChange={this.setvalue} />
              
             
            }
          </Form.Item>
          <Form.Item label={<span>
                Barcode
              </span>}>
          <Row>
          <Col span={12}><InputGroup compact>
          <Select defaultValue="Barcode" onChange={this.handlebarcode}>
            <Option value="110062">110062</Option>
            <Option value="110099">110099</Option>
            <Option value="110088">110088</Option>
            <Option value="110077">110077</Option>
            <Option value="shubham">110072</Option>
          </Select>
        </InputGroup> </Col>
    </Row>
            
          </Form.Item> 
          <Form.Item {...tailFormItemLayout}>
            <Button onClick={this.saveData} type="primary" htmlType="submit">
              Place Order
            </Button>
          </Form.Item>
        </Form>
       
         </div>
         
        </div>
      

        )
    }
}

export default Ordform;