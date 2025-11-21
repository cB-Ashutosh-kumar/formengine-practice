import React from 'react'

const Child = ({handleAddCart}) => {

  return (
    <div>
      <button onClick={()=>handleAddCart(1)}>addTo Cart</button>
    </div>
  )
}

export default Child
