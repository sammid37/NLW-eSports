import '../App.css'

import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'


export default function Supplies() {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h1 className="title">Art supplies list</h1>
            <h2 className="subtitle">
                You selected {3} items to your budget list, total ${54.00} 
                <Link><input className="supplies-btn-view-list" type="button" value="view budget list" /></Link>
            </h2>
            
            
            <br />
            <div className="supplies-database">
                <div className="supplies-search">search</div>
                <div className="supplies-item">
                    <table>item here</table>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
