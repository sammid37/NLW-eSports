import '../App.css'

import React from 'react'
// import data from './data/data.json'
import { Link } from 'react-router-dom'

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Searchbar from '../layout/Searchbar'


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
            <Searchbar/>
            <br /><br />
            <div className="supplies-database">
                <div className="supplies-item">
                    <table>item here</table>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
