import React, { Component } from 'react';
import Create from './training/Create/create';
import Header from './training/Create/header';
import Table from './training/Display/display';
import {BrowserRouter,Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header  heading="scheduling training events"/>
        <BrowserRouter>
          <div>
           <Route exact path='/' component={Create}/>
           <Route exact path='/training/Display/display' component={Table}/>
            </div>  
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
