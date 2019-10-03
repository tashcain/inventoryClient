import React, { Component } from 'react';
import axios from 'axios';
import {Table} from 'antd';
import {Link} from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';
import {config} from './config/Config';
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  Modal
} from 'antd';
import './component.css';
import Shipper from './shipper/shipper';

const { Column } = Table;

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





class AddStock extends Component {

  constructor(){
    super();
   
   this.state={
    // distance:Math.floor(100 + Math.random() * 900),
    data : [
      {
        key: '0',
        Shipper: 'Delhivery',
        mode: 'Road',
        time: '3 days',
        shippingRates:'Rs.'+1*Math.floor(100 + Math.random() * 900)
      },
      {
        key: '1',
        Shipper: 'DHL',
        mode: 'Road',
        time: '2 days',
        shippingRates: 'Rs.'+2*Math.floor(100 + Math.random() * 900)
      },
    ],
    comId:null,
    comName: null,
    prodName: null,
    Color: null,
    Category:null,
    Gender:null,
    Size:null,
    // subCategory:null,
    location:null,
    draft:[],
    getView:null,
    ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
  }
  this.setvalue= this.setvalue.bind(this);
  this.draftData= this.draftData.bind(this);
  this.handleCategory =this.handleCategory.bind(this);
  this.Location = this.Location.bind(this);
  this.updateDraft = this.updateDraft.bind(this);
  this.editStock = this.editStock.bind(this);
  this.handleGender = this.handleGender.bind(this);
  this.handleSize = this.handleSize.bind(this);
  this.sendData = this.sendData.bind(this);
}
async componentDidMount(){
    let data =  await JSON.parse(reactLocalStorage.get('draft'));
    console.log('lc data :',data);
    this.setState({
      draft:data
    })
}

sendData(){
  
  axios.post(config.route+'/stock',{
     comId : this.state.comId,
     comName : this.state.comName,
     prodName :  this.state.prodName,
     Color : this.state.Color,
     Category : this.state.Category,
     Gender : this.state.Gender,
     Size : this.state.Size,
     location : this.state.location
     

  })
  .then(res => {
      console.log(res.data);
  })
  .catch(err => {
      console.log(err);
  })

  }

  handleCategory(value){
    console.log(value)
  this.setState({
    Category:value
  })  
  }

  // handleSubCategory(value){
  //   console.log(value)
  // this.setState({
  //   subCategory:value
  // })  
  // }

  handleGender(value){
    console.log(value)
  this.setState({
    Gender:value,
  })  
  }

  handleSize(value){
    console.log(value)
  this.setState({
    Size:value,
  })  
  }

  Location(value){
    console.log(value)
  this.setState({
    location:value,
  })  
  }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };


async draftData(){
  if(this.state.comId === null){
    alert("kuch likh le pehle");  
  }
  else{
    alert("stock drafted");
  window.location.reload();
  var draftarray = await JSON.parse(reactLocalStorage.get('draft'));
  console.log(draftarray.length);
  if(draftarray.length === 0 ){
    let ddata = {};
  
    ddata.comId = this.state.comId;
    ddata.comName = this.state.comName;
    ddata.prodName = this.state.prodName;
    ddata.Color = this.state.Color;
    ddata.Category = this.state.Category;
    ddata.Gender = this.state.Gender;
    ddata.Size = this.state.Size;
    ddata.location = this.state.location;
  
    draftarray.push(ddata);
    reactLocalStorage.set('draft',JSON.stringify(draftarray));
    this.updateDraft();
  }
 else{
   console.log("else1");
    // var j = 0 ;
    // while(j<draftarray.length)   {
    if(draftarray[0].comId === this.state.comId ){
     alert("productId matches in draft");
      // j++;
    }
    else{
      console.log("else2");
      let ddata = {};
      ddata.comId = this.state.comId;
    ddata.comName = this.state.comName;
    ddata.prodName = this.state.prodName;
    ddata.Color = this.state.Color;
    ddata.Category = this.state.Category;
    ddata.Gender = this.state.Gender;
    ddata.Size = this.state.Size;
    ddata.location = this.state.location;
    
      draftarray.push(ddata);
      reactLocalStorage.set('draft',JSON.stringify(draftarray));
      this.updateDraft();
      }
  }
//  } 
  }
  // loop not good

}
setvalue(e){
  if(e.target.value === null){
   alert("kuch likh le pehle");
  }
  else{
    this.setState({
      [e.target.id]:e.target.value
  })
  }
}
async updateDraft(){
  console.log('Helllooo')
  let getData = await JSON.parse(reactLocalStorage.get('draft'));
  this.setState({
    draft:getData
  })
}

 editStock(e){
  console.log(e.target.id);
  var myData = JSON.parse(reactLocalStorage.get('draft'));

  for(var i=0;i<myData.length;i++){
    if(myData[i].comId === e.target.id){

      this.setState({
        comId:myData[i].comId,
        comName:myData[i].comName,
        prodName:myData[i].prodName,
        Color : myData[i].Color,
        Category:myData[i].Category,
        Gender:myData[i].Gender,
        Size:myData[i].Size,
        location:myData[i].location
  })
  myData.splice(i,1);
  reactLocalStorage.set('draft',JSON.stringify(myData));
    }
  }
}




render() {        
  const { visible, confirmLoading } = this.state;

    return (
        <div>  
     <div className="ordform">
       <Form className="form" {...formItemLayout} >
      <Form.Item label={<span>
            Company Id
           </span>}>
      <Row>
    <Col span={2}></Col>    
  <Col span={15}><Input id="comId" value={this.state.comId} onChange={this.setvalue}/></Col>
</Row>
    </Form.Item>
    <Form.Item label={<span>
            Company Name
           </span>}>
      <Row>
    <Col span={2}></Col>    
  <Col span={15}><Input id="comName" value={this.state.comName} onChange={this.setvalue}/></Col>
</Row>
    </Form.Item>
    <Form.Item label={<span>
            Product Name
           </span>}>
      <Row>
    <Col span={2}></Col>    
  <Col span={15}><Input id="prodName" value={this.state.prodName} onChange={this.setvalue}/></Col>
</Row>
    </Form.Item>
    <Form.Item label={<span>
            Color
           </span>}>
      <Row>
    <Col span={2}></Col>    
  <Col span={15}><Input id="Color" value={this.state.Color} onChange={this.setvalue}/></Col>
</Row>
    </Form.Item>

    <Form.Item label={<span>
            Gender
          </span>}>
      <Row>
      <Col span={2}></Col> 
     <InputGroup size="large">
          <Row gutter={8}>
          <Col span={12}><InputGroup compact>
      <Select style={{ width: '200px', marginLeft: '20px' }} defaultValue='Gender' onChange={this.handleGender}>
        <Option value="Male">Male</Option>
        <Option value="Female">Female</Option>
       
      </Select>
    </InputGroup>
     </Col>
     
          </Row>
        </InputGroup>

   
</Row>       
      </Form.Item>
      <Form.Item label={<span>
            Size
          </span>}>
      <Row>
      <Col span={2}></Col> 
     <InputGroup size="large">
          <Row gutter={8}>
          <Col span={12}><InputGroup compact>
      <Select style={{ width: '200px', marginLeft: '20px' }} defaultValue='Size' onChange={this.handleSize}>
        <Option value="S">S</Option>
        <Option value="M">M</Option>
        <Option value="L">L</Option>
        <Option value="XL">XL</Option>
        <Option value="XXL">XXL</Option>
      </Select>
    </InputGroup>
     </Col>
     
          </Row>
        </InputGroup>

   
</Row>       
      </Form.Item>
  

    <Form.Item label={<span>
            Category
          </span>}>
      <Row>
      <Col span={2}></Col> 
     <InputGroup size="large">
          <Row gutter={8}>
          <Col span={12}><InputGroup compact>
      <Select style={{ width: '200px', marginLeft: '20px' }} defaultValue='APPAREL' onChange={this.handleCategory}>
        <Option value="Tshirt">T-shirt</Option>
        <Option value="Jogger">Jogger</Option>
        <Option value="Pants">Pants</Option>
        <Option value="Shirt">Shirt</Option>
      </Select>
    </InputGroup>
     </Col>
     
          </Row>
        </InputGroup>

   
</Row>       
      </Form.Item>
      {/* <Form.Item label={<span>
            SubCategory
          </span>}>
      <Row>
     <InputGroup size="large">
          <Row gutter={8}>
          <Col span={12}><InputGroup compact>
      <Select style={{ width: '200px', marginLeft: '20px' }} defaultValue='T-Shirts.' onChange={this.handleSubCategory}>
        <Option value="apparel">APPAREL</Option>
        <Option value="110099">110099</Option>
        <Option value="110088">110088</Option>
        <Option value="110077">110077</Option>
        <Option value="shubham">110072</Option>
      </Select>
    </InputGroup>
     </Col>
    
          </Row>
        </InputGroup>

   
</Row>       
      </Form.Item> */}

      <Form.Item label={<span>
            Location
          </span>}>
      <Row>
     <InputGroup size="large">
          <Row gutter={8}>
          <Col span={12}><InputGroup compact>
      <Select style={{ width: '200px', marginLeft: '20px' }} defaultValue='WareHouse' onChange={this.Location}>
        <Option value="WH1">WH1</Option>
        <Option value="WH2">WH2</Option>
        
      </Select>
    </InputGroup>
     </Col>
    
          </Row>
        </InputGroup>

   
</Row>       
      </Form.Item>
         <div className="shipperbut">
        <Button style={{width:'300px'}} type="primary" onClick={this.showModal}>
          Select Shipper
        </Button>
        
        <Modal
          style={{width:'700px'}}
          title="Shipper"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Shipper data ={this.state.data}/>
        </Modal>
        
      </div>
                    
      
      <Form.Item {...tailFormItemLayout}>
        <Button style={{marginTop:'50px'}} onClick={this.draftData} type="primary" htmlType="submit">
          saveDraft
        </Button>
         <Button onClick={this.sendData} type="info" htmlType="submit">
          sendStock
        </Button>
      </Form.Item>
    </Form>
       {/* </div> */}
       <div className="draft">
        <h1>Draft</h1>
        <Table dataSource={this.state.draft}>
        <Column title="company Id" dataIndex="comId" key="productId" />
        <Column title="Category" dataIndex="Category" key="delloc" />
        <Column title="prodName" dataIndex="prodName" key="phn" />
        <Column title="Location" dataIndex="location" key="price" />
    <Column
      title="Edit"
      key="sds"
      dataIndex="comId"
      render={(comId) => (
        <span>
         <Link to="#"> <Button id={comId} onClick={this.editStock}>Edit</Button></Link>
         </span>
      )}
    />
    
  </Table> 
       </div>
     
   
     </div>
    </div>
  

    )      
    }
}

export default AddStock;
