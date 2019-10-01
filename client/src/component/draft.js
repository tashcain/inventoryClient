import React, { Component } from 'react';
import {Table, Button} from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';

const { Column } = Table;


export default class Draft extends Component {
    constructor(props){
        super(props);
        this.state = {
            drafdata: this.props.draftData,
            draftitle: []
        }
    }

    componentDidMount(){
    
      this.props.updateDraft();

        // fetch('http://localhost:5000/draft')
        // .then(res => res.json())
        // .then(json => {
        //     let drafdata = []
        //     let draftitle = []
        //       for(var i =0;i<json.length;i++){
        //         drafdata.push(json[i])
        //         draftitle.push(json[i].productId)
        //       }
        //         this.setState({
        //         drafdata : drafdata,
        //         draftitle : draftitle
        //     })
        //     console.log(this.state.draftitle);
            
        // })
        
    }
    render() {
        var {drafdata} = this.state;
        return (
            <div className="App">
            <Table dataSource={drafdata}>
    <Column
      title="Draft"
      key="productId"
      dataIndex="productId"
      render={(productId) => (
        <span>
         <Link to={"/draft/" + productId}> <Button >draft</Button></Link>
         </span>
      )}
    />
    
  </Table> 
            </div>
        )
    }
}
