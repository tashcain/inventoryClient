import React,{Component} from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Radio,
    Dropdown
  } from 'antd'; 

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
  
  
  
  

class Test extends Component{
        constructor(){
            super();
            this.state = {
                drafdata : []
            }
        }

    componentDidMount(){

        fetch('http://localhost:5000/draft')
        .then(res => res.json())
        .then(json => {
            let drafdata = []
              for(var i =0;i<json.length;i++){
                drafdata.push(json[i])
              }
                this.setState({
                drafdata : drafdata
            })
            
        })
        
    }
    render(){
        return(
            <div>
            <Form className="draftform" {...formItemLayout} >
      <Form.Item label={<span>
            productId
           </span>}>
      <Row>
    <Col span={2}></Col>    
  <Col span={8}><Input id="productId" value={this.state.drafdata.productId}/></Col>
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
        {(<Input id="paymo" onChange={this.setvalue} style={{ width: '100%' }}/>)}
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
        <Button onClick={this.draftData} type="primary" htmlType="submit">
          Place Order
        </Button>
      </Form.Item>
    </Form>
            </div>
            
        )
    }
}

export default Test;