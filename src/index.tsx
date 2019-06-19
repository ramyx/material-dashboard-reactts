import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// core components
import Admin from './layouts/Admin';
import RTL from './layouts/RTL';

import 'assets/css/material-dashboard-react.css?v=1.6.0';

const hist = createBrowserHistory();

ReactDOM.render(
// tslint:disable-next-line: jsx-wrap-multiline
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById('root')
);
