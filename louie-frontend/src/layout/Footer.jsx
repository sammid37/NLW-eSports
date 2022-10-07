import React from 'react';
import Louie from '../assets/landing-louie.png'

export default function Footer() {
  return (
      <footer className='footer'>
        <div className='footer-logo'>
          <h1 className='footer-h1'>Louie</h1>
          <h2 className='footer-h2'>Your <i>art supplies</i> <b>helper</b></h2>
        </div>
        <div className='footer-msg'>
          <p className='footer-p1'>I hope this tool will help many artists to choose their art supplies.</p>
          <p className='footer-p2'>Made with love, react framework and springboot by <a href="https://github.com/sammid37">sammid37</a>.</p>
        </div>
        <div>
          <img className="louie-mascot" src="http://127.0.0.1:5173/src/assets/landing-louie.png" alt="mascote" />
        </div>
      </footer>
   
  )
}
