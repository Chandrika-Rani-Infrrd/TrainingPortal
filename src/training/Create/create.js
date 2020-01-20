import React ,{components} from 'react';
import './create.css';
import DatePicker from 'react-date-picker';
//import Table from './display';
import {BrowserRouter,Route} from 'react-router-dom';


class Create extends React.Component{
 constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state={ categories:" " , topic:" " ,date:'new Date()' ,duration:" " ,host:" "};
} 
handleChange= e => {
    this.setState({
        [e.target.name]:e.target.value
    });
};
 handleSubmit=e=>{
    e.preventDefault();
  //<Route path='/training/Display/display' component={Table}/>;
} 

    render(){
        return(
                <form className='form-horizontal'>
               <div className="container">  
               
                 <div className='form-group '>
                 <label > Categories:</label>
                <input  className=" form-control col-sm-5" 
                type="text" name="categories" value={this.state.categories} 
                onChange={this.handleChange}/>
                </div>
                
                <div className='form-group'>       
                 <label >Topic:</label> 
                <input className=" form-control col-sm-5 " 
                type="text" name='topic' value={this.state.topic}
                 onChange={this.handleChange}/>
                </div>
              
                <div className='form-group'>
                <label>Host:  </label>
                <input className="form-control col-sm-5 " 
                type="text" name="host" value={this.state.host}
                 onChange={this.handleChange}/>
               </div>

                <div className='form-group'>
                <label >Date:</label>
                <input className="form-control col-sm-5 " 
                type="date" name="date" value={this.state.date}
                 onChange={this.handleChange}/>
                 <div/>
 
                 <div className='form-group'>
                <label >Duration:</label>
                <input className="form-control col-sm-5" 
                type="number" name="duration"  value={this.state.duration}
                 onChange={this.handleChange}/>
                 </div>
                
                <input className='btn btn-primary' 
                type="submit" name="submit" value="submit"
                onClick={this.handleSubmit}/> 
                </div>
                </div>
                </form> 
            
        );
    }
}
 class Input extends React.Component{
     render(){
         return(
             <div>
               <div className="heading">Schedule Training Events</div>
               <Create/>
               
             </div>
         );
     }
 }
export default Input;