import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' exact >
          <Login />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
