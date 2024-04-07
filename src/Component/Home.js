import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className='Main'>
        <div className='one'>
            <img src='https://s3-alpha-sig.figma.com/img/fce5/e0a7/6d3e531201ecd44ca61f9d27ff82e0ae?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbZtduvJj9~qwalEF1HHDmedKlTW90OCGe4hpAlTJ3MMBRtJgp0yoAnoa656A4yAYCjc5MHbrgQW~tw403PT3v9PdM-db6sPeYdjJHuNLHmQUSttSqz~-sKS9roTeSM~Vpjn33c-aAna4Bnm1~wTImxBzEbQATSJQ5-PjjmQywfJy5UW7zTfyyNRcnHE8AkVvcooB6nfHkKR7ll3Nz8LhQHQuVHhaq-kgLYPBNX0WtoloP2oVAJzxlMKA6~pSCyE-L5gL~WJVa5BRwm6kpOIonr87hXNs~gr7k8oMw6R2-m9vXlXwfX54zca1OBUM4LJ42Vmuu8MyWzrVtE8hYzkDw__'/>
        </div>
        <div className='two'>
            <h1>DICE GAME</h1>
            <Link to='/Landing'>
            <button>Play Now</button>
            </Link>
        </div>
    </div>
  )
}
