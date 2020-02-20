import React,{components} from 'react';
import {withRouter,Link} from 'react-router-dom';
class Edit extends React.Component{
    constructor(props){
        super(props);
        let data=JSON.parse(localStorage.getItem('list'));
        this.state={
            datas:data
        }   
    }
    handleChange= (e) => {
        let target=e.target;
        this.setState({
            [target.name]:target.value
        });
    }
    handleSubmit= (e) =>{ 
        let index=+this.props.match.params.id;
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
        this.props.history.push('/training/Display/display/'+index);
    };
    render(){
        let index=this.props.match.params.id;
         return(
            <div>
                {this.state.datas.map((data,dataindex)=>{
                    if(dataindex==index)
                        return (
                            <form className="container">  
                                <h3 className="margin">Edit Form</h3>

                                    <div className='form-group'>
                                        <label htmlFor="categories"> <b>Categories:</b></label>
                                            <input  className=" form-control" style={{width:300}}
                                                type="text" name="categories" defaultValue={data.categories} 
                                                onChange={this.handleChange}/>
                                     </div>
           
                                    <div className='form-group'>       
                                        <label htmlFor="topic"><b>Topic:</b></label> 
                                            <input className=" form-control " style={{width:300}}
                                               type="text" name='topic' defaultValue={data.topic}
                                               onChange={this.handleChange}/>
                                    </div>
         
                                     <div className='form-group'>
                                        <label htmlFor="host"><b>Host</b>:</label>
                                            <input className="form-control " style={{width:300}}
                                               type="text" name="host" defaultValue={data.host}
                                               onChange={this.handleChange}/>
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor="data"><b>Date:</b></label>
                                            <input className="form-control" style={{width:300}}
                                               type="date" name="date" defaultValue={data.date}
                                               onChange={this.handleChange}/>
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor="duration"><b>Duration:</b></label>
                                            <input className="form-control" style={{width:300}}
                                               type="number" name="duration" defaultValue={data.duration}
                                               onChange={this.handleChange}/>
                                    </div>

                                    <div>
                                        <input className="btn btn-primary" 
                                            type="button" name="save" value="Save"
                                            style={{margin:"10px"}} onClick={this.handleSubmit} />
                                        <Link to='/training/Display/table'>
                                            <button className="btn btn-primary" style={{margin:"5px"}}>Back</button> 
                                        </Link> 
                                    </div> 
                            </form>
                        ); 
                   })
                }
         </div>
    )}
}
export default Edit;