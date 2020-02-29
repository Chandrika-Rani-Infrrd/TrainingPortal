import React ,{components} from 'react';
import {withRouter,Link} from 'react-router-dom';
import Display from './display';
import Header from '../Shared/header';
import './table.css';
import Search from './search';
import Form from '../Create/Form';
import Edit from '../Edit/edit';
import moment from 'moment';

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
            datas:data,
            show:false,
            showEdit:false
        }  
   } 
   handlePopup(){
    this.setState({
        show:!this.state.show})
    }
    handleShowEdit(index){
        this.setState({
            showEdit:!this.state.showEdit,
            clickedIndex:index})
    }
    handleAdd=()=>{
        this.props.history.push('/training/Create/Form');
    }
    handleClick=(index)=>{
        this.props.history.push('/training/Display/display/'+index);
    } 
    handleDelete=(index)=>{
        const datas = [...this.state.datas];
        datas.splice(index, 1);
        this.setState({datas});
        this.setState((state)=>{
            state.datas=datas
            }); 
            localStorage.setItem('list',JSON.stringify(datas));
            alert("conform to delete");
            
    };
    /* handleEdit(index,e){
        console.log( "display to edit "+index);
        this.props.history.push('/training/Edit/edit/'+index);
        }  */
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.datas.map((data,index)=> {                    
                          return(
                            <tr className="tabledata" key={index}
                               onClick={()=>this.handleClick(index)}>
                                <td>{data.categories}</td>
                                <td>{data.topic}</td>
                                <td>{moment(data.date).format('DD-MM-YYYY')}</td> 

                                <td onClick={(e)=>e.stopPropagation()}>
                                <button className="btn btn-primary"
                                    onClick={(e)=>this.handleDelete(index)} >Delete</button>
                                 <button className="btn btn-primary"
                                 onClick={()=>this.handleShowEdit(index)}>Edit</button>
                                </td>
                            </tr>
                             );     
                           })
                        }  
                    </tbody>  
                </table> 
                <button className="btn btn-primary add" name="Add"
                    onClick={()=>this.handlePopup('form')}>Add</button>
                {this.state.show?
                <Popup >
                   {/*  <button onClick={this.handlePopup}>X</button> */}
                    <Form/>  
                </Popup>:console.log("close popup") }
                {this.state.showEdit?
                <Popup>
                    {/*<button onClick={()=>this.handleShowEdit(0)}>X</button> */}
                   <Edit indexs={this.state.clickedIndex} title="Edit Training Events"/>
                 
                </Popup>:console.log("edit modal closed")}
            </div>
        </div>
        );
    }
}
class Popup extends React.Component{
    render(){
        return(
            <div className="popup">
                <div className="popup_inner">
                {this.props.children}
                </div>
            </div>
        )
    }
}
export default Table;

