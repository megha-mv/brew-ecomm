import React from 'react'
import Products from '../Components/Products'


const Home = (props) => {
  return (
    <div>
      <h1>{props.dataParentToChild}</h1>
    <Products/>
    </div>
  )
}

export default Home