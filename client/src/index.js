import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Novels from './components/Novels'
   ReactDOM.render(
       <BrowserRouter>
         <Switch>
             <Route path="/" component={Novels} />
         </Switch>
       
       </BrowserRouter>,
    document.getElementById('root')
);

 