import React ,{components} from 'react';
import Form from '../Create/Form';
import Header from './header';
import Table from '../Display/table';
import Display from '../Display/display';
import SignUp from '../signUp.js';
import Edit from  '../Edit/edit';
import {Router,Route,BrowserRouter,browserHistory} from 'react-router-dom';

export default function Routes(){
    return (
      <div className="router">
        <BrowserRouter history={browserHistory}>
           <Route exact path='/' component={SignUp}/>
           <Route exact path='/training/Create/Form' component={Form}/>
           <Route exact path='/training/Display/table' component={Table}/>  
           <Route exact path='/training/Display/display/:id'component={Display} />
           <Route exact path='/training/Edit/edit' component={Edit}/>   
        </BrowserRouter>
      </div>
    );
}
