import React,{components} from 'react';
import Formfield from '../Create/formField';
import FormButtons from '../Create/fromButtons';

class Edit extends React.Component{
    constructor(props){
        super(props);
        let data=JSON.parse(localStorage.getItem('list'));
        this.state={
            datas:data
        }   
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
    handleSubmit= (e) =>{ 
        let index=this.props.indexs;
        console.log("inside submit in edit.js");
        console.log("after submit the edit "+index);
        const updatedData=this.state.datas.map((data,dataindex)=>{
            if(index===dataindex)
            return{
             categories:this.state.categories||data.categories,
             topic:this.state.topic||data.topic,
             host:this.state.host||data.host,
             date:this.state.date||data.date,
             duration:this.state.duration||data.duration  
            }
            return data;
        })
        localStorage.setItem('list',JSON.stringify(updatedData));
         e.preventDefault();
    };
    handleClose=()=>{
        this.props.history.push('/training/Display/table');
    }
    render(){
        let index=this.props.indexs;
        console.log("edit index"+index);
         return(
            <div>
                {this.state.datas.map((data,dataindex)=>{
                    if(dataindex===index)
                        return (
                            <form className="container" key={index}> 
                            <h3>{this.props.title}</h3> 

                                <Formfield nameOfField="Categories" fieldType="text"
                                   defaultValue={data.categories} handleChange={this.handleCategories}/>
                         
                                <Formfield nameOfField="Topic" fieldType="text"
                                   defaultValue={data.topic} handleChange={this.handleTopic}/>

                                <Formfield nameOfField="Host" fieldType="text"
                                   defaultValue={data.host} handleChange={this.handleHost}/>   

                                <Formfield nameOfField="Date" fieldType="date"
                                    defaultValue={data.date} handleChange={this.handleDate}/>
                                
                                <Formfield nameOfField="Duration" fieldType="number"
                                    defaultValue={data.duration} handleChange={this.handleDuration}/>                               
    
                                <FormButtons btnName="Save Details" handleButtons={this.handleSubmit}
                                    handleClose={this.handleClose}/>
                            </form>
                        ); 
                   })
                }
         </div>
    )}
}
export default Edit;