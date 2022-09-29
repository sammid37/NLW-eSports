import React from 'react'
import {Link} from 'react-router-dom'
import { Pencil, Database } from 'lucide-react';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <h1 className="navbar-h1">Louie</h1>
        <h1 className="navbar-h2">Your <i>art supplies</i> <b>helper</b></h1>
        <Link to="/louie/create">
          <Pencil color="#619396" size={32}/>
        </Link>
        <Link to="/louie">
          <Database color="#619396" size={32}/>
        </Link>
      </div>
    </div>
  )
}
