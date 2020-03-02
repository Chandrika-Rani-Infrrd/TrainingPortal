import React ,{components} from 'react';
import './form.css';
import DatePicker from 'react-date-picker';
import { withRouter} from 'react-router-dom';
import Table from '../Display/table';
import Formfield from '../Create/formField';
import FormButtons from './fromButtons';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
         categories:"" , topic:" ",host:" ",date:'new Date()', duration:" ",list:[]
        };
    }
    handleCategories=(e)=>{
        this.setState({categories:e.target.value})
    }
    handleTopic=(e)=>{
        this.setState({topic:e.target.value})
    }
    handleHost=(e)=>{
        this.setState({host:e.target.value})
    }
    handleDate=(e)=>{
        this.setState({date:e.target.value})  
    }
    handleDuration=(e)=>{
        this.setState({duration:e.target.value})
    }
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
                <h3 className="createForm">Create Training Form</h3>

                   <Formfield nameOfField="Categories" fieldType="text"
                    fieldValue={this.state.categories} handleChange={this.handleCategories}/>

                    <Formfield nameOfField='topic' fieldType="text"
                    fieldValue={this.state.topic} handleChange={this.handleTopic}/>    
                  
                    <Formfield nameOfField='host' fieldType="text"
                    fieldValue={this.state.host} handleChange={this.handleHost}/> 
                    
                    <Formfield nameOfField='date' fieldType="date"
                    fieldValue={this.state.date} handleChange={this.handleDate}/>
                   
                   <Formfield nameOfField='duration' fieldType="number"
                    fieldValue={this.state.duration} handleChange={this.handleDuration}/>
                   
                    <FormButtons btnName="Add Event" handleButtons={this.handleAdd}
                     handleClose={this.handleClose}/>
                </form>
        );
    }
}
export default Form;