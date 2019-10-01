import React, {Component} from 'react';
import {Table, Button} from 'antd';
import {Link} from 'react-router-dom';

const { Column } = Table;


class Stock extends Component{
    constructor(props){
        super(props);
        this.state = {size: 3,
            stock:[],
            isLoaded: false,
            Response: null

        }
      }



componentDidMount(){
    fetch('http://localhost:3001/stock')
    .then(res=> res.json())
    .then(json => {
        let stockArr = []
        for(var i =0;i<json.length;i++){
            stockArr.push(json[i])
            }
           this.setState({
            stock: stockArr,
            isLoaded:true
           }) 
         console.log(this.state.stockArr)

         
    });
}



    render(){
        var {stock, isLoaded} = this.state;
        if(!isLoaded){
            return  <div className="load">       
               <Button shape="circle" loading />
            </div>
          }
          else{ return(
            <div className="App">
            <Table dataSource={stock}>
     <Column title="Company Id" dataIndex="comId" key="productId" />
      <Column title="Company Name" dataIndex="comName" key="lastName" />
    <Column title="Product Name" dataIndex="prodName" key="age" />
    <Column
      title="Action"
      key="action"
      dataIndex="_id"
      render={(_id) => (
        <span>
        <Link to={"/res/" + _id}> <Button  type="primary">Response</Button></Link>
        </span>
      )}
    />
    
    
  </Table> 
            </div>
        )
    }
}
       
}

export default Stock;