import React from 'react';
import Home from './Component/Home';
import './App.css'
import Landing from './Component/Landing';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return(
    <div className='App'>
      <Router>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/Landing' Component={Landing} />
          </Routes>
      </Router>
    </div>
  )
}


export default App;