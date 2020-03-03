import React,{components}  from 'react';
import Form from "../training/Create/Form";
import {withRouter} from 'react-router-dom';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            nameError:'',
            emailError:'',
            passwordError:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    validate=()=>{
        let nameError='';
        let emailError='';
        let passwordError='';
            if(!this.state.name){
                nameError="name can't be empty";
            }
            if(!this.state.email.includes('@')){
                emailError="invalid email";
            }
            if(!this.state.password){
                passwordError="password can't be empty";
            }
            if(nameError||emailError||passwordError){
                this.setState({
                   nameError,emailError,passwordError
                });
            return false;
        }
        return true;
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
        this.setState({
        name:'',
        email:'',
        password:'',
        nameError:'',
        emailError:'',
        passwordError:'' 
       })
       this.props.history.push('/training/Create/Form');
    }
    };
    render(){
        return(
            <form className='container'>
             <h3 style={{margin:15}}>Sign-up Form</h3>

                <div className='form-group'>
                    <label><b>Name:</b></label>
                       <input  className=" form-control" style={{width:300}} 
                          placeholder="Enter your name" name="name" autoComplete="off"
                          onChange={this.handleChange}/>
                       <div style={{color:"red"}}>{this.state.nameError}</div>
                </div>

                <div className='form-group'>
                    <label><b>EMail:</b></label>
                       <input  className="form-control " style={{width:300}} type="email"
                           placeholder="Enter your Email" name="email" autoComplete="off"
                           onChange={this.handleChange}/>
                       <div style={{color:"red"}}>{this.state.emailError}</div>
                </div>

                <div className='form-group '>
                     <label className="col-sm-"><b>Password</b>:</label>
                        <input  className="form-control " style={{width:300}}
                           placeholder="Enter your password" type="password" 
                           name="password" autoComplete="off" onChange={this.handleChange}/>
                        <div style={{color:"red"}}>{this.state.passwordError}</div>
                </div>

                <div>
                     <input style={{margin:"5px"}}className="btn btn-primary" 
                        type="button" name="sign-up" value="Sign-up" 
                        onClick={this.handleSubmit} />
                </div>
            </form>
        )
    }
}
export default SignUp;
