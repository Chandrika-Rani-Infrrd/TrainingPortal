import React ,{components} from 'react';
import {withRouter,Link} from 'react-router-dom';
import Display from './display';
import Header from '../Shared/header';
import './table.css';
import Search from './search';


function EventHeader(){
    return(
        <div className="eventheader row">
            <h3 className="eventlist">Events List</h3>
        </div>
        )
    }
class Table extends React.Component{
    constructor(props){
        super(props);
        let data=JSON.parse(localStorage.getItem('list'));
        this.state={
            datas:data
        }  
   } 
    handleAdd=()=>{
        this.props.history.push('/training/Create/Form');
    }
    handleClick=(index)=>{
        this.props.history.push('/training/Display/display/'+index);
    } 
    render(){
        return(
            <div >
            <EventHeader/>
            <Search/>
            <div className='container '>
                <table className='table table-hover'>
                    <thead className='thead-light'> 
                        <tr >
                            <th>Categories</th>
                            <th>Topic</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.datas.map((data,index)=> {                    
                          return(
                            <tr className="tabledata" key={index}
                               onClick={()=>this.handleClick(index)}>
                                <td>{data.categories}</td>
                                <td>{data.topic}</td>
                                <td>{data.date}</td> 
                            </tr>
                             );     
                           })
                        }  
                    </tbody>  
                </table> 
            </div>
            <button className="btn btn-primary add" name="Add"
                onClick={this.handleAdd}>Add</button>
        </div>
        );
    }
}
export default Table;