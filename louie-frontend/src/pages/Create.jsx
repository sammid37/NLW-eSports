import axios from "axios";

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

import React, { useState, useRef, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Create() {
  let navigate = useNavigate();

  // const [supplies, setSupplies]=useState({})
  const [supplies, setSupplies]=useState({
    url: "",
    name: "",
    description: "",
    brand: "",
    grade: "",
    price: "",
    category: ""
   })
  const{ url, name, description, brand, grade, price, category} = supplies
  const handleChange = (event) => { 
    setSupplies({ ...supplies, [event.target.name]: event.target.value})
  }

  const options = [
    {
      label: "Acrylic paint",
      value: "Acrylic paint"
    },
    {
      label: "Gouache paint",
      value: "Gouache paint"
    },
    {
      label: "Watercolor paint",
      value: "Watercolor paint"
    },
    {
      label: "Oil paint",
      value: "Oil paint"
    },
    {
      label: "Eraser",
      value: "Eraser"
    },
    {
      label: "Graphite pencil",
      value: "Graphite pencil"
    },
    {
      label: "Colored pencil",
      value: "Colored pencil"
    },
    {
      label: "Brush",
      value: "Brush"
    },
    {
      label: "Paper",
      value: "Paper"
    },
    {
      label: "Sketchbook",
      value: "Sketchbook"
    },
  ]

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(supplies)
    await axios.post("http://localhost:8080/louie/create", supplies);
    navigate("/louie");
  }
  const ref = useRef(null);
  useEffect(() => {
    const imagePreview = event => {
      const image_url = document.getElementById("image-url").value; // gets image url
      const image_preview = document.getElementById("image-preview");
      image_preview.src = image_url;  // insert url into src attribute
    }; 
    const element = ref.current;
    element.addEventListener("change", imagePreview);
   
  }, [])

  return (
    <div>
      <Navbar/>
        <div className="container">
          <h1 className="title">Add new art supplies</h1>
          <h2 className="subtitle">Some fields are required, please fill them in correctly.</h2>

          <form className="louie-forms" onSubmit={handleSubmit}>
            <div className="louie-left">
              <label className="louie-label" htmlFor="">name </label><br />
              <input 
                className="louie-input-text" 
                placeholder="ex.: Watercolor pan ultramarine blue"
                type="text" 
                name = "name"
                value={name}
                onChange={(event) => handleChange(event)}
                required 
              /><br />
              <label className="louie-label" htmlFor="">description</label><br />
              <textarea 
                className="louie-textarea" 
                placeholder="Your description goes here."
                name="description" 
                value={description}
                onChange={(event) => handleChange(event)}
              /><br />
              <div className="louie-row">
                <div className="louie-item">
                  <label className="louie-label">category</label><br />
                  <select name="category" value={category} className="louie-select" onChange={(event) => handleChange(event)} required>
                  {options.map(
                    (option) =>
                      (<option name="category" value={option.value}>{option.label}</option>)
                  )}
                  </select>
                </div>
                <div className="louie-item">
                <label className="louie-label" htmlFor="">grade</label><br />
                  <select name="grade" value={grade} className="louie-select" onChange={(event) => handleChange(event)} required> 
                    {/* <option disabled defaultValue={"Select a category"}>select</option> */}
                    <option 
                      name="grade"
                      value={"Basic"}>Basic
                    </option>
                    <option 
                      name="grade"
                      value={"Student"}>Student
                    </option>
                    <option 
                      name="grade"
                      value={"Professional"}>Professional
                    </option>
                  </select>
                </div>
              </div>
              <div className="louie-row">
                <div className="louie-item">
                  <label className="louie-label" htmlFor="">brand</label><br />
                  <input 
                    className="louie-input-text" 
                    placeholder="ex.: Pestilento"
                    type="text" 
                    name="brand"
                    value={brand} 
                    onChange={(event) => handleChange(event)}
                    required
                  /><br />
                </div>
                <div className="louie-item">
                <label htmlFor="" className="louie-label">price</label><br />
                  <input 
                    className="louie-price" 
                    placeholder="Insert price here"
                    type="number" 
                    step="0.01"  
                    min="0.0"
                    name="price" 
                    value={price} 
                    onChange={(event) => handleChange(event)}
                    required
                  />
                </div>
              </div>
              <br />    
            </div>
            <div className="louie-right">
              <label htmlFor="" className="louie-label">picture</label><br />
              {/* <img src="" alt="" />
              <input type="file" name="url" id="" accept="image/png, image/jpeg"/> */}
            
              <div className="louie-image-preview" >
                <img id="image-preview" src="" alt="image preview goes here" />
              </div>
              <input 
                className="louie-input-text" 
                ref={ref}
                placeholder="insert image url here"
                type="text" 
                name="url" 
                id="image-url" 
                value={url} 
                onChange={(event) => handleChange(event)}
                /*onChange={
                  event => {
                    this.handleChange(event); 
                    this.image_preview_a(event);
                  }
                }*/
                />
              <br />
              <input className="louie-submit" type="submit" value="submit" />
              <p className="notes">Some fields are mandatory to fill in.</p>
            </div>
          </form>
        </div>
      <Footer/>
    </div>
  )
}
