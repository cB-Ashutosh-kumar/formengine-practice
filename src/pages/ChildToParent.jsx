import React, { useState } from 'react'
import Child from '../comopnents/Child';

const ChildToParent = () => {

  const [cartCount, setCartCount] = useState(0);

  // handleAddCart
  const handleAddCart = (quantity) => {
    setCartCount((prev) => prev + quantity);
  }


  return (

    <div>
      <h1>ProductName</h1>
      <p style={{ color: "black" }}>cart Item {cartCount}</p>
      <Child handleAddCart={handleAddCart} />
    </div>
  )
}

export default ChildToParent
