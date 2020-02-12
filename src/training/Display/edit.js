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
        this.props.history.push('/training/Display/table');
    };
    render(){
        let index=this.props.match.params.id;
         return(
            <div>
           {this.state.datas.map((data,dataindex)=>{
             if(dataindex==index)
                return (
             <form className='form-horizontal'>
            <div className="container">  
            <h3>Edit Form</h3>

            <div className='form-group '>
            <label htmlFor="props.categories" > Categories: </label>
           <input  className=" form-control col-sm-5" 
               type="text" name="categories" defaultValue={data.categories} 
               onChange={this.handleChange}/>
           </div>
           
           <div className='form-group'>       
            <label htmlFor="props.topic" >Topic:</label> 
           <input className=" form-control col-sm-5 " 
               type="text" name='topic' defaultValue={data.topic}
               onChange={this.handleChange}/>
           </div>
         
           <div className='form-group'>
           <label htmlFor="props.host">Host:  </label>
           <input className="form-control col-sm-5 " 
               type="text" name="host" defaultValue={data.host}
               onChange={this.handleChange}/>
          </div>

           <div className='form-group'>
           <label htmlFor="props.data">Date:</label>
           <input className="form-control col-sm-5 " 
               type="date" name="date" defaultValue={data.date}
               onChange={this.handleChange}/>
            </div>

            <div className='form-group'>
           <label htmlFor="props.duration">Duration:</label>
           <input className="form-control col-sm-5" 
               type="number" name="duration" defaultValue={data.duration}
               onChange={this.handleChange}/>
            </div>

           <div>
           <input className="btn btn-primary" 
               type="button" name="save" value="save"
               style={{margin:"10px"}} onClick={this.handleSubmit} />
                <Link to='/training/Display/table'>
               <button className="btn btn-primary" name="back">Back</button> 
               </Link> 
           </div> 
           </div>
           </form>
           ); 
         })
        }
    </div>
 )}
}
export default Edit;