import React ,{components} from 'react';
import Form from './Form';
import Header from './header';
import Table from '../Display/display';
import {BrowserRouter,Route, Link} from 'react-router-dom';
class Router extends React.Component{
render() {
    return (
      <div className="router">
        <BrowserRouter>
          <div>
           <Route exact path='/' component={Form}/>
           <Route exact path='/training/Display/display' component={Table}/>
            </div>  
        </BrowserRouter>
      </div>
    );
  }
}
export default Router;