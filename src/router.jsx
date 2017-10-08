import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './containers/app.jsx';
import StudentDetail from './containers/details.jsx';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/student/:name' exact component={StudentDetail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
