import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {deleteFromCart} from '../Actions/delete'
import '../App.css'

const Cart = () => {
  const cartDatas = useSelector((state) =>state.cartAddDelete)
  console.log(cartDatas);
  let amount = cartDatas.length && cartDatas.map(item=>item.price).reduce((prev, next)=>prev+next)
  const dispatch = useDispatch();
  return (
    <div>Welcome to your Cart , 
      <h1>Items in Cart : {cartDatas.length}</h1>    
      {cartDatas.map((cartData)=>(
        <div className='product-container'>
          <img src={cartData.image} alt=""/>
          <h1>Title : {cartData.title}</h1>
          <h1>Price : Rs.{cartData.price}</h1>
          <button onClick={()=>dispatch(deleteFromCart(cartData.id))}>Remove from cart</button>
        </div>
      ))}
      <div>Total : {amount}</div>
      <div>
      <button>Proceed to pay</button>
      </div>
    </div>
  )
}

export default Cart;