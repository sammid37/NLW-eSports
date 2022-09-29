import React, { useEffect, useState } from 'react'

import {Link, useParams} from 'react-router-dom'
import {Trash2, Edit2, Edit} from 'lucide-react'
import axios from 'axios'

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

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
/*
  const deleteSupplies = async (id) => {
    await axios.delete(`http://localhost:3306/louie/${id}`)
    loadSupplies()
  }
*/
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h1 className="title">View all art supplies</h1>
            <h2 className="subtitle">You can manage the list of art supplies.</h2>
          
            <table className="louie-database">
              <tbody>
                <tr>
                  <td>#1</td>
                  <td><img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/825/047/products/magenta1-aa49a46eb7a7a2eb1616297413826693-1024-1024.jpg" alt="Aquarela liquida" /></td>
                  <td>Aquarela líquida magenta</td>
                  <td id="l-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque ex ac leo sagittis mollis. Proin aliquet ex nec interdum euismod.</td>
                  <td>Pestilento</td>
                  <td>Artist</td>
                  <td id="l-price">$ 18.00</td>
                  <td>
                    <button><Edit color='#575279'/></button>
                    <button><Trash2 color='#b4637a'/></button>
                  </td>
                </tr>
                <tr>
                  <td>#2</td>
                  <td><img src="https://www.pentel.com.br/assets/uploads/products/95/tinta-gouache-profissional-poster-color-wpu.png" alt="Aquarela liquida" /></td>
                  <td>Poster color orange</td>
                  <td id="l-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque ex ac leo sagittis mollis. Proin aliquet ex nec interdum euismod.</td>
                  <td>Pentel</td>
                  <td>Student</td>
                  <td id="l-price">$ 16.00</td>
                  <td>
                    <button><Edit color='#575279'/></button>
                    <button><Trash2 color='#b4637a'/></button>
                  </td>
                </tr> 
                {supplies.map((s, index) => (
                    <tr>
                      <td scope="row" key={s.id}>#{s.id}</td>
                      <td><img src={s.url} /></td>
                      <td>{s.name}</td>
                      <td>{s.description}</td>
                      <td>{s.brand}</td>
                      <td>{s.grade}</td>
                      <td>$ {s.price.toFixed(2)}</td>
                      <td>
                        <Link to={`/${supplies.id}`}>
                          <button>
                            <Edit color='#575279'/>
                          </button>
                        </Link>
                        
                        <button onClick={() => deleteSupplies(supplies.id)}>
                          <Trash2 color='#b4637a'/>
                        </button>
                        

                      </td>
                    </tr>   
                  ))
                }
              </tbody>

            </table>
        </div>
        <Footer/>
    </div>
  )
}
