import { useState } from 'react'
import './App.css'

import Footer from './layout/Footer'
import Landing from './pages/Landing';
import Supplies from './pages/Supplies';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        {/* Leads you to the supplies database and making a budget list*/}
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route exact path="/supplies" element={<Supplies/>} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
