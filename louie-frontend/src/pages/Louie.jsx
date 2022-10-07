import React, { useEffect, useState } from 'react'

import {Link, useParams} from 'react-router-dom'
import {Trash2, Edit2, Edit, Eye, EyeOff} from 'lucide-react'
import axios from 'axios'

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Searchbar from '../layout/Searchbar'

export default function Louie() {
  const [supplies, setSupplies] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    loadSupplies()
  }, [])

  const loadSupplies = async () => {
    console.log("Art Supplies Database")
    const result = await axios.get("http://localhost:8080/louie")
    console.log(result.data)
    setSupplies(result.data)
  }

  const deleteSupplies = async (id) => {
    await axios.delete(`http://localhost:8080/louie/${id}`)
    loadSupplies()
  }

  return (
    <div>
      <Navbar/>
      <div className="container">
        <h1 className="title">View all art supplies</h1>
        <h2 className="subtitle">You can manage the database of art supplies.</h2>
        <Searchbar/>
        <br /><br />
        <table className="louie-database">
          {/* <thead>
            <tr>
              <th>id</th>
              <th>image</th>
              <th>name</th>
              <th>description</th>
              <th>brand</th>
              <th>grade</th>
              <th>price</th>
              <th>actions</th>
            </tr>
          </thead> */}
          <tbody>
            {/* *****ESTATISCO */}
            {/* <tr>
              <td>#1</td>
              <td><img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/825/047/products/magenta1-aa49a46eb7a7a2eb1616297413826693-1024-1024.jpg" alt="Aquarela liquida" /></td>
              <td>Aquarela líquida magenta</td>
              <td id="l-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque ex ac leo sagittis mollis. Proin aliquet ex nec interdum euismod.</td>
              <td>Pestilento</td>
              <td>Artist</td>
              <td id="l-price">$ 18.00</td>
              <td>
                <button id="edit"><Edit color='#575279'/></button>
                <button id="trash"><Trash2 color='#b4637a'/></button>
              </td>
            </tr> */}
            {supplies.map((s, index) => (
              <tr>
                <td scope="row" key={s.id}>#{s.id}</td>
                <td><img src={s.url} /></td>
                <td>{s.name}</td>
                <td>
                  {s.description}
                  <br />
                  <p>
                    <i><b>{s.brand}</b></i>. {s.grade} grade {s.category}
                  </p>
                </td>
              
                <td>$ {s.price.toFixed(2)}</td>
                <td>
                  <button><Eye color='#575279'/></button>
                  <Link to={`/louie/${s.id}`}>
                    <button>
                      <Edit color='#575279'/>
                    </button>
                  </Link>
                  <button onClick={() => deleteSupplies(s.id)}>
                    <Trash2 color='#b4637a'/>
                  </button>
                </td>
              </tr>   
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  )
}
