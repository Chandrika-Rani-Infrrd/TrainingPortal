import React,{components} from 'react';
import Input from '../Create/Form';
import './header.css';
import Display from '../Display/display';

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