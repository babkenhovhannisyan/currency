import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routeCodes } from 'routes/routeCodes.js';

// Currency page
const Currency = lazy(() => import('containers/Currency'));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={ <div>Loading ...</div> }>
        <Switch>
            <Route
                exact
                path={ routeCodes.ROOT }
                component={ () => <Currency /> }
            />
            <Route component={ () => <div>404 Page Not found</div> } />
          </Switch>
      </Suspense>
    </Router>
  )
};

export default Routes;