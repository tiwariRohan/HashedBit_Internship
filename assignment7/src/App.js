// src/App.js
import React from 'react';
import PointsTable from './components/PointsTable';
import './App.css'; // Ensure this file exists and is correctly imported

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PointsTable />
      </header>
    </div>
  );
}

export default App;
