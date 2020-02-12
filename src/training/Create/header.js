import React,{components} from 'react';
import Input from './Form';
import './header.css';

function Header(props){
    
        return(
            <div className="header">
            <div className="heading">
                {props.heading}
             </div>
             </div>
        )
    };
export default Header;