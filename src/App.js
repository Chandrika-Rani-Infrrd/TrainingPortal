import React, { components } from 'react';
import Header from './training/Shared/header'; 
import Routes from './training/Shared/routes';
import {BrowserRouter,Route, Link} from 'react-router-dom';

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
