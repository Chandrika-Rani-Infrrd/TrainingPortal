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
        <div className="eventHeader row">
            <h3 className="eventList">Training Events List</h3>
        </div>
        )
    }
export default class Table extends React.Component{
    constructor(props){
        super(props);
            let data=JSON.parse(localStorage.getItem('list'));
            this.state={
                datas:data,
                showForm:false,
                showEdit:false
        }  
   } 
    handleShowCreateForm=()=>{
        this.setState({showForm:!this.state.showForm})
    }
    handleShowEditForm(index){
        this.setState({
            showEdit:!this.state.showEdit,
            clickedIndex:index
        })
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
    handleDisplay=(index)=>{
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
                        <tr>
                            <th>Categories</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.datas.map((data,index)=> {                    
                          return(
                            <tr className="tabledata" key={index} onClick={()=>this.handleDisplay(index)}>
                                <td>{data.categories}</td>
                                <td>{data.topic}</td>
                                <td>{moment(data.date).format('DD-MM-YYYY')}</td>
                                <td onClick={(e)=>e.stopPropagation()}>                              
                                    <button className="btn btn-primary" onClick={(e)=>this.handleDelete(index)}>
                                        Delete
                                    </button>
                                    <button className="btn btn-primary" onClick={()=>this.handleShowEditForm(index)}>
                                        Edit                      
                                    </button>
                                </td>
                            </tr>
                             );     
                           })
                        }  
                    </tbody>  
                </table> 
                <button className="btn btn-primary add" name="add" onClick={this.handleShowCreateForm} >           
                    Add
                </button>
                {this.state.showForm?
                    <Modal>
                        <Form />  
                    </Modal>:null}
                {this.state.showEdit?
                    <Modal>
                        <Edit 
                            indexs={this.state.clickedIndex} 
                            title="Edit Training Events"
                        />               
                    </Modal>:null}
            </div>
        </div>
        );
    }
}
function Modal(props){
    return(
        <div className="popupModal">
            <div className="popupModal_Inner">
               {props.children}
            </div>
        </div>
    )
}


