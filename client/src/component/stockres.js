import React, {Component} from 'react';
import './component.css';
import {config} from './config/Config';

class Restock extends  Component{
    constructor(Props){
        super(Props);
        this.state = {
            response:null,
            response_col:null
        }

    }
    
    componentDidMount(){
        let id = this.props.match.params.id;
        fetch(config.route+'/stock/'+id)
        .then(res => res.json())
        .then(json => {
           if(json.status === 0){
               this.setState({
                   response: "stock has been placed no response till now",
                   response_col: "response_red"
               })
           }
           else{
               if(json.status === 1){
                   this.setState({
                       response: "stock received under process",
                       response_col: "response_green"
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
            
            <div>
            <div className={this.state.response_col}>{this.state.response}</div>
                </div>
        )
    }
}

export default Restock;