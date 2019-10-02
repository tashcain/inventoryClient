import React, {Component} from 'react';

class Response extends  Component{
    constructor(Props){
        super(Props);
        this.state = {
            response:null,
            response_col:null
        }

    }
    
    componentDidMount(){
        let id = this.props.match.params.id;
        fetch('http://localhost:3001/order/'+id)
        .then(res => res.json())
        .then(json => {
           if(json.status === 0){
               this.setState({
                   response: "order has been placed no response till now",
                   response_col: "response_red"
               })
           }
           else{
               if(json.status === 1){
                   this.setState({
                       response: "order received under process",
                       response_col: "response_green"
                   })
               }
               else{
                   this.setState({
                       response: "order has been delivered",
                       response_col: "response_darkgreen"
                   })
               }
           }
        });
        
    }


    render(){
        return(
            <div className={this.state.response_col}>{this.state.response}</div>
        )
    }
}

export default Response;