import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

import axios from "axios";

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function Create() {
  let navigate = useNavigate();

  // const [supplies, setSupplies]=useState({})
  const [supplies, setSupplies]=useState({
    url: "",
    name: "",
    description: "",
    brand: "",
    grade: "",
    price: ""
   })
  const{ url, name, description, brand, grade, price} = supplies
  const handleChange = (event) => { 
    setSupplies({ ...supplies, [event.target.name]: event.target.value})
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(supplies)
    await axios.post("http://localhost:8080/louie/create", supplies);
    navigate("/louie");
  }

  return (
    <div>
      <Navbar/>
        <div className="container">
          <h1 className="title">Add new art supplies</h1>
          <h2 className="subtitle">Some fields are required, please fill them in correctly.</h2>

          <form className="louie-forms" onSubmit={handleSubmit}>
            <div className="louie-left">
              <label className="louie-label" htmlFor="">name</label><br />
              <input 
                className="louie-input-text" 
                type="text" 
                name = "name"
                value={name}
                onChange={(event) => handleChange(event)}
                // required 
              /><br />
              <label className="louie-label" htmlFor="">description</label><br />
              <textarea 
                className="louie-textarea" 
                name="description" 
                value={description}
                onChange={(event) => handleChange(event)}
              /><br />
              <label className="louie-label" htmlFor="">brand</label><br />
              <input 
                className="louie-input-text" 
                type="text" 
                name="brand"
                value={brand} 
                onChange={(event) => handleChange(event)}
                // required
              /><br />
              <label className="louie-label" htmlFor="">grade</label>
              <br />
              <div>
                <div>
                  <label htmlFor="" className="louie-radio-label">Student
                  </label> 
                  <input 
                    type="radio" 
                    name="grade" 
                    value={"Student"}
                    onChange={(event) => handleChange(event)}
                  /><br />
                  <label htmlFor="" className="louie-radio-label">Artist</label>
                  <input 
                    type="radio" 
                    name="grade" 
                    value={"Artist"}
                    onChange={(event) => handleChange(event)}
                    // required 
                  />
                </div>
                <div>
                  <label htmlFor="" className="louie-label">price</label><br />
                  <input 
                    className="louie-price" 
                    type="number" 
                    step="0.01"  
                    name="price" 
                    value={price} 
                    onChange={(event) => handleChange(event)}
                    // required
                  />
                </div>
              </div>     
            </div>
            <div className="louie-right">
              <label htmlFor="" className="louie-label">picture</label><br />
              <input className="louie-input-text" type="text" name="url" value={url} onChange={(event) => handleChange(event)} />
              <br />
              <input className="louie-submit" type="submit" value="submit" />
            </div>

            
          </form>
        </div>
      <Footer/>
    </div>
  )
}
