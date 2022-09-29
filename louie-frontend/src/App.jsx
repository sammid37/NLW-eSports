import './App.css'

import Louie from './pages/Louie';
import Create from './pages/Create';
import Landing from './pages/Landing';
import Supplies from './pages/Supplies';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        {/* Routes */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route exact path="/supplies" element={<Supplies/>} />
            <Route exact path="/louie" element={<Louie/>} />
            <Route exact path="/louie/create" element={<Create/>} />

          </Routes>
        </Router>
    </div>
  )
}

export default App
