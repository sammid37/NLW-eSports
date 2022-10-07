import {React, useState} from 'react'
import {Search} from 'lucide-react'

export default function Searchbar() {
  // const [inputText, setInputText] = useState("")
  // let handleInput = (e) => {
  //   var lowercase = e.target.value.toLowerCase("")
  //   setInputText(lowercase)
  // }
  return (
    <div>
      <div className="louie-search">
        <input 
          type="search" 
          className='louie-search-bar' 
          placeholder='Type a name of an art supply or somenthing else...'
      
        />
        <button className='louie-search-button'><Search color='#797593' size={16}/></button><br />
      </div>
    </div>
  )
}
