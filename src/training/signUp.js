import React,{components}  from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import {withRouter} from 'react-router-dom';
import  * as Yup from 'yup';
import './signup.css';

const validation=Yup.object().shape({
    name:Yup.string().required("Name can't be empty"),
    email:Yup.string().required("email can't be empty"),
    password:Yup.string().min("4","Minimum of 6 characters")
              .max("10","not more than 10 characters")
              .required("can't be empty")
})

export default class SignUp extends React.Component{
    render(){
        return(
            <Formik
                initialValues={{
                    name:'',
                    email:'',
                    password:''
                }}
                onSubmit={(values)=>{
                    console.log("values "+values);
                    this.props.history.push('/training/Display/table');
                }}
                validationSchema={validation}
    render={({error})=>{
        return(
            <div className="container">
                <h3>SignUp Form</h3>
                <Form className="form-group">
                    <label><b>Name</b></label>
                    <Field 
                        className="form-control form"
                        name="name" 
                        type="text"
                        placeholder="Enter the name" 
                    />
                    <ErrorMessage component="div" className="error" name="name" />                   
                    <label><b>Email</b></label>
                    <Field 
                        className="form-control form" 
                        name="email"
                        type="text"
                        placeholder="Enter the email" 
                    />
                    <ErrorMessage component="div" className="error" name="email" />                   
                    <label><b>Password</b></label>
                    <Field 
                        className="form-control form" 
                        name="password" 
                        type="password" 
                        placeholder="Enter the password"
                    /> 
                    <ErrorMessage component="div" className="error" name="password" />
                    <button className="btn btn-primary submit">Submit</button>             
                </Form>
            </div>
            )}}
        />
)}}