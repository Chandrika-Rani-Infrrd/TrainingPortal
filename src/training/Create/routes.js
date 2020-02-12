import React ,{components} from 'react';
import Form from './Form';
import Header from './header';
import Table from '../Display/table';
import Display from '../Display/display';
import SignUp from '../Display/signUp';
import Edit from  '../Display/edit';
import {Router,Route,BrowserRouter,browserHistory} from 'react-router-dom';
class Routes extends React.Component{
render() {
    return (
      <div className="router">
        <BrowserRouter history={browserHistory}>
           <Route exact path='/' component={Form}/>
           <Route exact path='/training/Display/table' component={Table}/>  
           <Route exact path='/training/Display/display/:id'component={Display} />
           <Route exact path='/training/Display/edit/:id' component={Edit}/>   
           <Route exact path='/training/Display/signUp' component={SignUp}/>
        </BrowserRouter>
      </div>
    );
  }
}
export default Routes;