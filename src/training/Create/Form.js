import React ,{components} from 'react';
import DatePicker from 'react-date-picker';
import cookie from 'react-cookie';
class Form extends React.Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            categories:" " , topic:" ",date:'new Date()', duration:" " ,host:" ",list:[]
        };
    }
    handleChange= e => {
        this.setState({
            [e.target.name]:e.target.value
        });  
    };
  handleSubmit = e => {
        e.preventDefault();
        let list=this.state.list; 
        list.push({
            id:"1",
        categories:this.state.categories,
        topic:this.state.topic,
        host:this.state.host,
        date:this.state.date,
        duration:this.duration  
    }) 
    console.log(list);
    localStorage.setItem('list',JSON.stringify(list));
       alert("add data successfully");
    }
    render(){
        return(
                <form className='form-horizontal'>
                 <div className="container">  
               
                 <div className='form-group '>
                 <label > Categories: </label>
                <input  className=" form-control col-sm-5" 
                type="text" name="categories" value={this.props.categories} 
                onChange={this.handleChange}/>
                </div>
                
                <div className='form-group'>       
                 <label >Topic:</label> 
                <input className=" form-control col-sm-5 " 
                type="text" name='topic' value={this.props.topic}
                 onChange={this.handleChange}/>
                </div>
              
                <div className='form-group'>
                <label>Host:  </label>
                <input className="form-control col-sm-5 " 
                type="text" name="host" value={this.props.host}
                 onChange={this.handleChange}/>
               </div>

                <div className='form-group'>
                <label >Date:</label>
                <input className="form-control col-sm-5 " 
                type="date" name="date" value={this.props.date}
                 onChange={this.handleChange}/>
                 </div>
 
                 <div className='form-group'>
                <label >Duration:</label>
                <input className="form-control col-sm-5" 
                type="number" name="duration"  value={this.props.duration}
                 onChange={this.handleChange}/>
                 </div>

                <div>
                <input className="btn btn-primary btn-lg" 
                type="button" name="submit" value="submit"
                onClick={this.handleSubmit} /> 
                </div>
                
                </div>
                </form> 
            
        );
    }
}
export default Form;