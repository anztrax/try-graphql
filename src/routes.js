import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './Components/Layout';
import IndexPage from './Page/IndexPage';
import AthletePage from './Page/AthletePage';
import NotFoundPage from './Page/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="athlete/:id" component={AthletePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;