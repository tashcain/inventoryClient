import React, {Component} from 'react';

class Response extends  Component{
    constructor(Props){
        super(Props);
        this.state = {
            response:null
        }

    }
    
    componentDidMount(){
        let id = this.props.match.params.id;
        fetch('http://localhost:3001/order/'+id)
        .then(res => res.json())
        .then(json => {
           if(json.status === 0){
               this.setState({
                   response: "order has been placed no response till now"
               })
           }
           else{
               if(json.status === 1){
                   this.setState({
                       response: "order received under process"
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

export default Response;