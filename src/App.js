// Imported GlobalStyles here
import { GlobalStyles } from './GlobalStyles';

import React from 'react';

// components we created
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      Start here.
      <GlobalStyles/>
    </div>
  );
}

export default App;
