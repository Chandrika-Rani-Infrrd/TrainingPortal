import React, { components } from 'react';
import Form from './training/Create/Form';
import Header from './training/Shared/header';
import Table from './training/Display/table'; 
import Routes from './training/Shared/routes';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import SignUp from './training/Create/signUp';

class App extends React.Component {
 render() {
    return (
      <div className="App">
         <Header  heading="scheduling training events"/>
         <Routes/> 
      </div>
    );
  }
}

export default App;
