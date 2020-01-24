import React, { components } from 'react';
import Form from './training/Create/Form';
import Header from './training/Create/header';
import Table from './training/Display/display'; 
import Router from './training/Create/router';
import {BrowserRouter,Route, Link} from 'react-router-dom';

class App extends React.Component {
  
 render() {
    return (
      <div className="App">
         <Header  heading="scheduling training events"/>
         <Router/> 
      </div>
    );
  }
}

export default App;
