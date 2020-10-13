import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RecipesScreen from './components/RecipesScreen'
import GatewayScreen from './components/GatewayScreen'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/gateway/' component={GatewayScreen} />
        <Route path='/' component={RecipesScreen} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
