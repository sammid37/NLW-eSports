import React from 'react'
import {Link} from 'react-router-dom'
import { Pencil, Database, LayoutList } from 'lucide-react';

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to={"/"} id="link-color">
          <div className="navbar-logo">
            <h1 className="navbar-h1">Louie</h1>
            <h1 className="navbar-h2">Your <i>art supplies</i> <b>helper</b></h1> 
          </div>
        </Link>
        <div className="navbar-links">
          <button className="navbar-btn">
            <Link to="/louie/create">
              <Pencil color="#619396" size={32}/>
            </Link> 
          </button>
          <button className="navbar-btn">
            <Link to="/louie">
              <Database color="#619396" size={32}/>
            </Link>
          </button>
          <button className="navbar-btn">
            <Link to="/supplies">
              <LayoutList color="#619396" size={32}/>
            </Link>
          </button>
          
        </div>
      </nav>
    </div>
  )
}
