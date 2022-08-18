import React from 'react'
import { useLocation } from 'react-router-dom'
import {useDispatch, useSelector } from "react-redux";
import addToCart from '../Actions/add'
const Product = (props) => {
  const product = useSelector((state) =>state.cartAddDelete)
  
  console.log('This is from Product.js',product)

  const location = useLocation();
  const { id,image,price,category,description} = location.state;
 
  console.log(location.state);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{id}</div>
      <div>
      <img src={image} alt=""/>
      </div>
      <div>
      {price}
      </div>
      <div> 
     {description}
      </div>
      <div>
      {category} 
     </div>
      <button onClick={()=>dispatch(addToCart(location.state))}>Add to Cart</button>
    </div>
  )
}

export default Product