import React ,{components} from 'react';
import './form.css';
import DatePicker from 'react-date-picker';
import { withRouter} from 'react-router-dom';
import FormField from '../Create/formField';
import FormButtons from './fromButtons';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            categories:"" , topic:" ",host:" ",date:'new Date()', duration:" ",list:[]
        };
    }
    componentDidMount(){
        let data=JSON.parse(localStorage.getItem('list'));
        this.setState({list:data}); 
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
    handleAddEvents= (e) =>{
        e.preventDefault();
        let list=this.state.list;
        list.push({
        categories:this.state.categories,
        topic:this.state.topic,
        host:this.state.host,
        date:this.state.date,
        duration:this.state.duration  
    });
        localStorage.setItem('list',JSON.stringify(list));
        alert( this.state.topic+" add successfully ");  
        this.setState({categories:'',topic:''}) 
    };
    handleCloseCreateForm=()=>{
        this.props.history.push('/training/Display/table');
    } 
    render(){
        return(  
            <form className="container">
                <h3 className="createForm">Create Training Form</h3>
                    <FormField 
                       nameOfField="Categories" 
                       fieldType="text"
                       fieldValue={this.state.categories} 
                       handleChange={this.handleCategories}
                    />
                    <FormField 
                       nameOfField='topic' 
                       fieldType="text"
                       fieldValue={this.state.topic} 
                       handleChange={this.handleTopic}
                    />                     
                    <FormField 
                        nameOfField='host' 
                        fieldType="text"
                        fieldValue={this.state.host} 
                        handleChange={this.handleHost}
                    />                    
                    <FormField 
                        nameOfField='date' 
                        fieldType="date"
                        fieldValue={this.state.date} 
                        handleChange={this.handleDate}
                    />                   
                    <FormField 
                        nameOfField='duration' 
                        fieldType="number"
                        fieldValue={this.state.duration} 
                        handleChange={this.handleDuration}
                    />                  
                    <FormButtons 
                        btnName="Add Event" 
                        handleButtons={this.handleAddEvents}
                        handleClose={this.handleCloseCreateForm}
                    />
                </form>
        );
    }
}

