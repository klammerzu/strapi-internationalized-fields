/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnErrorOccurred } from '@strapi/helper-plugin';

const App = () => {
  return (
    <div>
      <Switch>
        <Route component={AnErrorOccurred} />
      </Switch>
    </div>
  );
};

export default App;
