import React from 'react';
import './search.css';
import {withRouter,Link} from 'react-router-dom';

class Search extends React.Component{
    constructor(props){
        super(props);
        let data=JSON.parse(localStorage.getItem('list'));
        this.state={
            datas:data,
            search:''
        }
    }
    handleSearchChange=(e)=>{
        let target=e.target;
        this.setState({
            [target.name]:target.value
        })
    }
    handleClick(index,e){
        e.preventDefault();
        this.props.history.push('/training/Display/display/'+index);
    }
    render(){
        let categories=this.state.search;
        const findValue=this.state.datas.filter((data)=>{
            if(data.categories===categories)
               return data;
            }); 
            console.log(findValue);
        return(
            <div >       
                <input className="form-control col-sm-3 Search" type="search"
                    name="search" placeholder="search" autoComplete="off"
                    onChange={this.handleSearchChange} />
                    <div className="container">
                    <table className='table'>
                        <tbody>
                            {findValue.map((data,index)=>{
                                console.log("search data index "+index);
                            return( 
                        <tr onClick={()=>this.handleClick(index)}>
                            <td>{data.categories}</td>
                            <td>{data.topic}</td>
                            <td>{data.date}</td> 
                        </tr>
                      );
                    })}
                </tbody>
            </table>
            </div> 
            </div>
        )
    }
}
export default Search;