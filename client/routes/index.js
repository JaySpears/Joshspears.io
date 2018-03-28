// Import Dependencies.
import React from 'react';
import { Route, Switch } from 'react-router-dom'

// Import Scences.
import ExampleScene from '../scenes/example/index.jsx';

// Set up routes.
const routes = (store) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ExampleScene}/>
      </Switch>
    </div>
  )
}

// Export routes.
export default routes;
