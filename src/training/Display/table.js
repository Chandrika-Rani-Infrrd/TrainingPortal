import React ,{components} from 'react';
import { withRouter,Link} from 'react-router-dom';
import Display from './display';
import Edit from './edit';

class Table extends React.Component{
    constructor(props){
        super(props);
        let data=JSON.parse(localStorage.getItem('list'));
        this.state={
            datas:data
        }  
   } 
   handleDelete=(index)=>{
    const datas = [...this.state.datas];
    datas.splice(index, 1);
    this.setState({datas});
    this.setState((state)=>{
        state.datas=datas
        }); 
        localStorage.setItem('list',JSON.stringify(datas));
};
 handleEdit(index){
this.props.history.push('/training/Display/edit/'+index);
} 
handleDisplay(index,data){
this.props.history.push('/training/Display/display/'+index);
}
 render(){
    return(
            <div>
            <div className='container'>
            <h3>Events List</h3>
            <table className='table '>
            <thead className='thead-light'> 
            <tr>
            <th className='col-sm-' >Categories</th>
            <th className='col-sm-'>Topic</th>
            <th className='col-sm-'>Date</th>
            <th className='col-sm-'>Actions</th>
            </tr>
            </thead>
               <tbody>
                  {this.state.datas.map((data,index)=> {
                    return(
                        <tr key={index} >
                        <td>{data.categories}</td>
                        <td>{data.topic}</td>
                        <td>{data.date}</td> 
                        <td >
                            <Link to='/training/Display/signUp'>
                            <button style={{margin:"5px"}} className="btn btn-primary"> sign-up</button>
                            </Link>
                            
                            <button style={{margin:"5px"}} className="btn btn-primary"
                            onClick={()=>this.handleEdit(index)}>Edit</button>
                                                      
                            <button style={{margin:"5px"}} className="btn btn-primary"
                            onClick={ (e)=>this.handleDisplay(index,data) }
                            > Display</button>
                          
                            <button style={{margin:"5px"}}  onClick={(e)=>this.handleDelete(index)}
                            className="btn btn-primary">Delete</button>
                           
                        </td>
                        </tr>
                           );     
                     })
                }  
            </tbody>  
            </table> 
            </div> 
            </div>
        );
    }
    
}
export default Table;