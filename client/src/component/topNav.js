import React, {Component} from 'react';
// // import { Icon } from 'antd';
import Logo from './LOGO.JPG';

import './component.css';
class TopNav extends Component{
    render(){
    return(
            <div className="searchbardiv">
                <div >
                <img style={{height:'70px',width:'400px',marginLeft:'34%'}} src={Logo} alt="LOGO"/>
                </div>
              </div>
        )
    }
}

export default TopNav;