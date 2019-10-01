import React, { Component } from 'react';
import './dummydash.css';
import { Table } from 'antd';
import RecTable from '../platable';
import {Link} from 'react-router-dom';
import image from './graph.JPG';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  
  {
    title: '',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    address: 'Sidney No. 1 Lake Park',
  },
];


export default class Dummydash extends Component {
    render() {
        return (
            <div >
                <div className="Bar">
                    <div className="type">
                        <div className="dailyact">Daily Activities</div>
                        <div className="typeOps">
                        <Link to="/deliveredOrder">
                            <div className="section1">
                                <h1>06</h1>
                                <span>Delivered</span>
                                </div></Link>
                        <Link to='/ordtable'>
                        <div className="section2">
                            <h1>06</h1>
                            <span>Placed</span>
                            </div>
                        </Link>        
                            <div className="section3">
                            <h1>22</h1>    
                            <span>Items</span>
                            </div>
                        </div>
                    </div>
                    <div className="graph">
                        <img style={{height:'200px',width:'400px'}} src={image} alt="graph"/>
                    </div>
                </div>
                
                <div className="tables">
                    <div className="rigtab">
                    <Table columns={columns} dataSource={data} size="middle" />
                    </div>
                    <div className="leftab">
                    <Table columns={columns} dataSource={data} size="middle" />
                    </div>
                </div>
                <div className="orderTable">
                    <RecTable/>
                </div>
            </div>
            
        )
    }
}
