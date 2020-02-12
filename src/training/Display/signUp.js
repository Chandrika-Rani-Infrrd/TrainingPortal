import React,{components}  from 'react';

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
       if(!this.state.password>=6){
        passwordError="minimum 6 or more characters";
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
    }
    };
    render(){
        return(
            <form className='form-control' >
            <div className='container'> 
             <h3>Sign-up Form</h3>
                <div className='form-group '>
                    <label>Name:</label>
                <input  className=" form-control  col-sm-5 " 
                  placeholder="Enter your name" name="name" 
                  onChange={this.handleChange}/>
                  <div style={{color:"red"}}>{this.state.nameError}</div>
                </div>

                <div className='form-group '>
                <label>EMail:</label>
                <input  className=" form-control col-sm-5" 
                  placeholder="Enter your Email" name="email" 
                  onChange={this.handleChange}/>
                   <div style={{color:"red"}}>{this.state.emailError}</div>
                </div>

                <div className='form-group '>
                <label>Password:</label>
                <input  className=" form-control col-sm-5" 
                 placeholder="Enter your password" type="password" 
                 name="password"  onChange={this.handleChange} />
                  <div style={{color:"red"}}>{this.state.passwordError}</div>
                </div>

                <div>
                <input style={{margin:"5px"}}className="btn btn-primary btn-lg" 
                    type="button" name="sign-up" value="sign-up" 
                    onClick={this.handleSubmit}
                    />
                </div>
            </div>
            </form>
        )
    }
}
export default SignUp;