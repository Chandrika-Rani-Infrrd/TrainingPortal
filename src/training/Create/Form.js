import React ,{components} from 'react';
import './form.css';
import DatePicker from 'react-date-picker';
import { withRouter} from 'react-router-dom';
import Table from '../Display/table';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
         categories:" " , topic:" ",date:'new Date()', duration:" " ,host:" ",list:[]
        };
    }
    handleChange= e => {
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        });  
    };
    handleAdd= (e) =>{
        e.preventDefault();
        let list=this.state.list;
        list.push({
        categories:this.state.categories,
        topic:this.state.topic,
        host:this.state.host,
        date:this.state.date,
        duration:this.duration  
    });
        localStorage.setItem('list',JSON.stringify(list));
        alert( this.state.topic+" add successfully ");  
        this.setState({categories:'',topic:''}) 
    };
    handleClose=()=>{
        this.props.history.push('/training/Display/table');
    }
    componentDidMount(){
        let data=JSON.parse(localStorage.getItem('list'));
        this.setState({
            list:data }); 
    } 
    render(){
        return(  
            <form className="container">
                <h3 style={{margin:10}}>Create Form</h3>

                     <div className='form-group'>
                         <label htmlFor="categories"><b>Categories: </b></label>
                            <input  className="form-control formfield" autoComplete="off" id="cat"
                               type="text" name="categories" value={this.props.categories} 
                               onChange={this.handleChange}/>
                    </div> 
                
                    <div className='form-group'>       
                         <label htmlFor="topic"><b>Topic:</b></label> 
                             <input className=" form-control formfield" autoComplete="off"
                               type="text" name='topic' value={this.props.topic}
                               onChange={this.handleChange}/>
                     </div>
              
                     <div className='form-group'>
                        <label htmlFor="host"><b>Host:</b></label>
                            <input className="form-control formfield" autoComplete="off"
                               type="text" name="host" value={this.props.host}
                               onChange={this.handleChange}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="data"><b>Date:</b></label>
                            <input className="form-control formfield" autoComplete="off" 
                                type="date" name="date" value={this.props.date}
                                onChange={this.handleChange}/>
                    </div>
 
                    <div className='form-group'>
                        <label htmlFor="duration"><b>Duration:</b></label>
                            <input className="form-control formfield" autoComplete="off"
                                type="number" name="duration"  value={this.props.duration}
                                onChange={this.handleChange}/>
                    </div>

                    <div>
                        <button className="btn btn-primary " 
                            type="submit" name="add" 
                            onClick={this.handleAdd}>Add Event</button>
                        <button className="btn btn-primary" name="close" 
                            onClick={this.handleClose}>Close</button>
                    </div>
                </form>
        );
    }
}
export default Form;