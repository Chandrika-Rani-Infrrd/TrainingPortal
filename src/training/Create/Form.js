import React ,{components} from 'react';
import DatePicker from 'react-date-picker';
import { withRouter} from 'react-router-dom';

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
          this.categories.value='';
    };
  componentDidMount(){
         let data=JSON.parse(localStorage.getItem('list'));
        this.setState({
            list:data });  
    } 
         
  handleSubmit = e => {
        e.preventDefault();
      this.props.history.push('/training/Display/table'); 
    }
    render(){
        return(
                <form className='form-horizontal'>
                 <div className="container">  
                 <h3>Create Form</h3>
                 <div className='form-group '>
                 <label htmlFor="props.categories" > Categories: </label>
                <input  className=" form-control col-sm-5" 
                    type="text" name="categories" value={this.props.categories} 
                    onChange={this.handleChange}/>
                </div>
                
                <div className='form-group'>       
                 <label htmlFor="props.topic" >Topic:</label> 
                <input className=" form-control col-sm-5 " 
                    type="text" name='topic' value={this.props.topic}
                    onChange={this.handleChange}/>
                </div>
              
                <div className='form-group'>
                <label htmlFor="props.host">Host:  </label>
                <input className="form-control col-sm-5 " 
                    type="text" name="host" value={this.props.host}
                    onChange={this.handleChange}/>
               </div>

                <div className='form-group'>
                <label htmlFor="props.data">Date:</label>
                <input className="form-control col-sm-5 " 
                    type="date" name="date" value={this.props.date}
                    onChange={this.handleChange}/>
                 </div>
 
                 <div className='form-group'>
                <label htmlFor="props.duration">Duration:</label>
                <input className="form-control col-sm-5" 
                    type="number" name="duration"  value={this.props.duration}
                    onChange={this.handleChange}/>
                 </div>

                <div>
                   <input className="btn btn-primary btn-lg" 
                    type="button" name="submit" value="view"
                    style={{margin:"10px"}} onClick={this.handleSubmit} /> 
                <input className="btn btn-primary btn-lg" 
                    type="button" name="add" value="+"
                    onClick={this.handleAdd}/>
                </div>
                
                </div>
                </form>
            
        );
    }
}
export default Form;