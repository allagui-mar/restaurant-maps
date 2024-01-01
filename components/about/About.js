import React from 'react';
import "./About.css";
import Tranche from "../../assets/PizzaTranche.png";


function About() {
  return (
    <div className='about'>
      
     <div className='aboutTop' style={{backgroundImage: `url(${Tranche})`}}></div>
     <div className='aboutBottom'>
      <h1>About Us</h1>
      <p>  Il n'y a pas grand chose de plus à dire :elle est tout simplement « la reine de la table ».
      Que ce soit dans sa version simple avec mozzarella fiordilatte
      ou mozzarella de bufala (auquel cas ce serait techniquement appelé une pizza Bufalina),
      la pizza Margherita est sans aucun doute la pizza préférée des Italiens.</p>
     </div>
    </div>
  )
}

export default About
