import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Base from './components/common/App.js';
import BaseDetail from './components/home/App.js';

import NotFound from './components/exception/404.js';

import {BrowserRouter,Switch,Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  <Switch>

  <Route exact path="/" component={Base}/>
  <Route path="/basedetail/:slug" component={BaseDetail}/>
  <Route path="*" component={NotFound} status={404} />

  </Switch>
  </BrowserRouter>,

  document.getElementById('root')
  
);
