import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';

import { Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/home' element={<Home />} /> 
      </Routes>
    </div>
  );
}

export default App;
