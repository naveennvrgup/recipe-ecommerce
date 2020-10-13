import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import RecipesScreen from './components/RecipesScreen'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecipesScreen />
      </BrowserRouter>
    </div>
  );
}

export default App;
