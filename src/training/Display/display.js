import React ,{components} from 'react';

class Table extends React.Component{
    constructor(){
        super();
        let data=JSON.parse(localStorage.getItem('list'));
        console.log(data);
        this.state={
            datas:data
        }

   } 
    render(){
        return(
            <div>
            <div className='container'>
            <h3>Events List</h3>
            <table className='table '>
            <thead className='thead-light'> 
            <tr>
            <th className='col-sm-'>Topic</th>
            <th className='col-sm-'>Date</th>
            <th className='col-sm-' >Speaker</th>
            <th className='col-sm-'>Actions</th>
            </tr>
            </thead>
               <tbody>
                  {this.state.datas.map((data,index)=> {
                    return(
                        <tr key={index}>
                        <td>{data.topic}</td>
                        <td>{data.date}</td>
                        <td>{data.host}</td> 
                        <td>
                            <button type="button" className="btn btn-primary">sign-up</button>
                            <button type="button" className="btn btn-primary">Edit</button>
                            <button type="button" className="btn btn-primary">Details</button>
                            <button type="button" className="btn btn-primary">Delete</button>
                        </td>
                        </tr>
                           );
                     })
                }  
            </tbody>  
            </table> 
            </div> 
            </div>
        );
    }
}
export default Table;