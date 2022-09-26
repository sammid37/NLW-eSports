import React from 'react'
import Footer from '../layout/Footer';
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div>
            <div className="container">
                <h1 className='landing-h1'>Louie</h1>
                <h2 className='landing-h2'>Your <i>art supplies</i> <b>helper</b></h2>
                <p className='landing-p'>Need help choosing your art supplies? Louie can help you with the budget! Check out all the materials available in our database and start putting together your shopping list.</p>
                <Link to="/supplies">
                    <input className='landing-button' type="button" value="Let's go, Louie!" />
                </Link>
                <br />
                <img className="landing-louie" src="src/assets/landing-louie.png" alt="Louie mascot" />
            </div>
            <Footer/>
        </div>
  )
}
