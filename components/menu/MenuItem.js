import React from 'react'

function MenuItem({name,image,price}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})`}}> </div>
        <h1>{name}</h1>
          <p>{price} DT</p>  
             
    </div>
  )
}

export default MenuItem
