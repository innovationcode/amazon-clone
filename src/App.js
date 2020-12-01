import React from 'react';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';

import './App.css';

function App() {
  return (
    <div className="App">
        {/* Header bar */}
        <Header />
        
        {/* Home Component */}
        <Home />
    </div>
  );
}

export default App;
