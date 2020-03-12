import React,{components} from 'react';
import FormField from '../Create/formField';
import FormButtons from '../Create/fromButtons';

export default class Edit extends React.Component{
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
    handleChangedData= (e) =>{ 
        let index=this.props.indexs;
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
    handleCloseEditForm=()=>{
        this.props.history.push('/training/Display/table');
    }
    render(){
        let index=this.props.indexs;
        console.log("edit index"+index);
        return(
            <div>
                {this.state.datas.map((data,dataindex)=>{
                if(dataindex===index)
                    return(
                        <form className="container" key={index}> 
                        <h3>{this.props.title}</h3> 
                        <FormField 
                            nameOfField="Categories" 
                            fieldType="text"
                            defaultValue={data.categories}
                            handleChange={this.handleCategories}
                        />                        
                        <FormField 
                            nameOfField="Topic" 
                            fieldType="text"
                            defaultValue={data.topic} 
                            handleChange={this.handleTopic}
                        />
                        <FormField 
                            nameOfField="Host" 
                            fieldType="text"
                            defaultValue={data.host}
                            handleChange={this.handleHost}
                        />   
                        <FormField 
                            nameOfField="Date" 
                            fieldType="date"
                            defaultValue={data.date}
                            handleChange={this.handleDate}
                        />                              
                        <FormField 
                            nameOfField="Duration" 
                            fieldType="number"
                            defaultValue={data.duration} 
                            handleChange={this.handleDuration}
                        />                                 
                        <FormButtons 
                            btnName="Save Details" 
                            handleButtons={this.handleChangedData}
                            handleClose={this.handleCloseEditForm}
                        />
                    </form>
                    ); 
                })
            }
        </div>
    )}
}
