import React,{components} from 'react';
import Input from './create';
import './header.css';

function Header(props){
        return(
            <div className="heading">
                {props.heading}
             </div>
        )
    };
export default Header;