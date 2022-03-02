// Imported GlobalStyles here
import { GlobalStyles } from './GlobalStyles';

import React from 'react';

// components we created
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
