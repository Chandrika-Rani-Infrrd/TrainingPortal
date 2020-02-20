import React from 'react';

class Categories extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categories:''
        }
    }
    createCategories(e){
        let target=e.target;
        this.setState({
            [target.name]:target.value
        })
    }
    render(){
        return(
            <div> 
                <h3> Categories</h3>
                <input type="text" name="categories"
                value={this.state.categories} onChange={()=>this.createCategories()}/>
            </div>
        )
    }
}