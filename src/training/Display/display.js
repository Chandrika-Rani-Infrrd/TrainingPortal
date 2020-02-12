import React, { components } from 'react';

class Display extends React.Component{
    constructor(props){
        super(props);
        let data=JSON.parse(localStorage.getItem('list'));
        this.state={
            datas:data  
        }  
   } 
   render(){
       let index=this.props.match.params.id;
       return (
            <div className="container"> 
               {this.state.datas.map((data,dataindex)=>{
                     if(dataindex==index)
                    return (
                        <div className='container'>
                        <ol key={dataindex} >
                            <h3>Details</h3>
                            <li>key:{dataindex}</li>
                            <li>Categories:{data.categories}</li>
                            <li>Topic:{data.topic}</li>
                            <li>Host:{data.host}</li>
                            <li>Date:{data.date}</li>
                            <li>Duration:{data.duration}</li> 
                        </ol>
                        </div>
                              
                          );
                    })
                }
            </div>
        )
    }
}
export default Display;