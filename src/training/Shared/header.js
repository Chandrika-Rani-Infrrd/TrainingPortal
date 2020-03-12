import React,{components} from 'react';
import './header.css';

export default function Header(props){
    return(
        <div className="header">
            <div className="heading">
                {props.heading}
            </div>
        </div>
        )
    };
 