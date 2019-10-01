import React, {Component} from 'react';

class Restock extends  Component{
    constructor(Props){
        super(Props);
        this.state = {
            response:null
        }

    }
    
    componentDidMount(){
        let id = this.props.match.params.id;
        fetch('http://localhost:3001/stock/'+id)
        .then(res => res.json())
        .then(json => {
           if(json.status === 0){
               this.setState({
                   response: "stock has been placed no response till now"
               })
           }
           else{
               if(json.status === 1){
                   this.setState({
                       response: "stock received under process"
                   })
               }
               else{
                   this.setState({
                       response: "order status 2"
                   })
               }
           }
        });
        
    }


    render(){
        return(
            <div>{this.state.response}</div>
        )
    }
}

export default Restock;