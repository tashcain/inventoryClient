import React, {Component} from 'react';
import { Table, Badge,Button, Divider,Icon,Row,Col, Card } from 'antd';
import {Link} from 'react-router-dom';
import './component.css';

const { Column } = Table;


class Dash extends Component{
  constructor(Props){
    super(Props);
    this.state = {
        items:[]
          }
}

func(){
  console.log(this.state.items)
}

componentDidMount(){
  fetch(config.route+'/users')
  .then(res => res.json())
  .then(json => {
      this.setState({
          items: json
      })
  });
}
render(){
  var {items} = this.state;
  return(
<div style={{}}>
<Row>
      <Col span={12}>
      <Card title="" bordered={false} style={{ width: 300 }}>
             <Badge className="recreq" count={items.length}>
             <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Link to="/ordtable">
              <div className="recreq" ><Icon  style={{height:"200px"}} type="align-left" /> </div>
             <span style={{fontSize:"25px", paddingTop:"20px"}}>Placed Orders</span>
             </Link>
             </div>
             </Badge>
    </Card>
    </Col>
    
      <Col span={12}> <Card title="" bordered={false} style={{ width: 300 }}>
                <Badge className="recreq" count={items.length}>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
             <Link to="/deliveredOrder">
              <div className="recreq" ><Icon  style={{height:"200px"}} type="align-left" /> </div>
             <span style={{fontSize:"25px", paddingTop:"20px"}}>Delivered Orders</span>
             </Link>
             </div>
            </Badge>
            </Card>
            </Col>
      <Col span={12}>
            <Card title="" bordered={false} style={{ width: 300 }}>
                <Badge className="recreq" count={items.length}>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
             <Link to="/Zalotest"> 
             <div className="recreq" ><Icon  style={{height:"200px"}} type="align-left" /> </div>
             <span style={{fontSize:"25px", paddingTop:"20px"}}>Zalotest</span>
             </Link>
             </div>
            </Badge>
            </Card>
            </Col>
    </Row>

     
            
            
                         </div>
  )}

}


export default Dash;