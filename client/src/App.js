import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import TopNav from './component/topNav';
import {Link,BrowserRouter,Route,Switch} from 'react-router-dom';
import './component/component.css';
import Ordform from './component/ordform';
import RecTable from './component/platable';
import Response from './component/orderRes';
import Deltable from './component/delivtable';
import Stock from './component/stocktab';
import StockMan from './component/StockMAn';
import AddStock from './component/addStock';
import Restock from './component/stockres';
import {reactLocalStorage} from 'reactjs-localstorage';
import Dummydash from './component/dash/dummmydash';
import Test1 from './component/test/test1';
import Axios from 'axios';
import Shipper from './component/shipper/shipper';
import './App.css';

const {  Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

export default class App extends Component {
  state = {
    collapsed: false,
  };
  componentDidMount(){
    if(reactLocalStorage.get('draft') === undefined){
      reactLocalStorage.set('draft', JSON.stringify([]));
    }
    Axios.get('http://localhost:3001/')
  }

  setValue(e){
      console.log(e)
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <div>
       <BrowserRouter>
    <TopNav/>
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
          <Link to="/" style={{color:'#fff'}}>
              <Icon type="desktop" />
             <span >Dashboard</span>
             </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/placerequest" style={{color:'#fff'}}>
              <Icon type="desktop" />
              <span >Place request</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
          <Link to="/StockMan" style={{color:'#fff'}}>
              <Icon type="desktop" />
             <span >StockMan</span>
             </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

            <div className="App">
              <Switch>
              <Route exact path='/shipper' component={Shipper}/>
              <Route exact path='/test' component={Dummydash}/>
              <Route exact path='/test1' component={Test1}/>
               <Route exact path='/placerequest' component={Ordform} />
               <Route exact path='/' component={Dummydash} />
               <Route exact path='/StockMan' component={StockMan}/>
               <Route exact path='/ordtable' component={RecTable} />
               <Route exact path='/order/:id' component={Response}/>
               <Route exact path='/stock' component={Stock}/>
               <Route exact path='/deliveredOrder' component={Deltable}/>
               <Route exact path='/res/:id' component={Restock}/>
               <Route exact path='/addStock' component={AddStock}/>
               </Switch>
 
            </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>@RedHare</Footer>
        </Layout>
      </Layout>
   
    </BrowserRouter>
      </div>
    )
  }
}
