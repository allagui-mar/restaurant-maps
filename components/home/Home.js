import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom';
import BannerImage from '../../assets/cuisine-italienne.jpg';
function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
        
     <div className='headerContainer' >
      <h1>Vive la gout de Pizza Italienne</h1>
      <p>Pizza TO FIT ANY TASTE</p>
      
      <Link to="/menu" className='btn'>
      <button>ORDER NOW</button>
      </Link>
     </div>
     
      
    </div>
  )
}

export default Home
