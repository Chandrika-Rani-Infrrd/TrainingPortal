import React ,{components} from 'react';

class Table extends React.Component{
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
            </table> 
            </div> 
            </div>
        );
    }
}
export default Table;