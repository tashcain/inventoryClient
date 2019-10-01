import React, { Component } from 'react';
import {Card, Col, Badge, Icon, Menu, Row} from 'antd';
import {Link} from 'react-router-dom';







class StockMan extends Component {
        constructor(Props){
          super(Props);
          this.state = {
              items:[]
                }
      }
      componentDidMount(){
        fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json
            })
        });
      }
      render(){
        var {items} = this.state;
        return (  
            <div>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
      <Menu.Item key="mail">
      <Link to="/addStock"> <Icon type="mail" />
     Update Stock </Link> 
        </Menu.Item>
        </Menu>
                <Row>
                <Col span={12}><Card title="" bordered={false} style={{ width: 300 }}>
                <Badge className="recreq" count={items.length}>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
             <Link to="/stock"> 
             <div className="recreq" ><Icon  style={{height:"200px"}} type="align-left" /> </div>
             <span style={{fontSize:"25px", paddingTop:"20px"}}>Stocks</span>
             </Link>
             </div>
            </Badge>
            </Card>
            </Col>
                </Row>
            
            </div>
        )
    }
}

export default StockMan;
