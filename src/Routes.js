import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from 'Pages/Home'
import Bind from 'Pages/Maps/Bind'
import Haven from 'Pages/Maps/Haven'
import Split from 'Pages/Maps/Split'

export const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/bind" component={ Bind } />
        <Route path="/haven" component={ Haven } />
        <Route path="/split" component={ Split } />
      </Switch>
  )
}

export default Routes