/* Styles */
import './App.css' 
import './styles/Forms.css'
import './styles/Landing.css'
import './styles/Database.css'


/* Components and pages */
import Edit from './pages/Edit';
import Louie from './pages/Louie';
import Create from './pages/Create';
import Landing from './pages/Landing';
import Supplies from './pages/Supplies';

/* Route */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/supplies" element={<Supplies/>} />
          <Route exact path="/louie" element={<Louie/>} />
          <Route exact path="/louie/create" element={<Create/>} />
          <Route exact path="/louie/:id" element={<Edit/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
