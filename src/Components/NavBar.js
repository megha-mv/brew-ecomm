import React from 'react'
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import '../App.css'

const NavBar = () => {
  const result = useSelector((state) =>state.cartAddDelete)
  console.log('These are the items from NavBar.js',result);
  return (
    <div className="header">
    <Link to="/"><h1 className='logo'>Brew</h1></Link>
    <Link to="/cart"><h1 className='logo'>Checkout</h1></Link>
    <Link to="/signIn"><h1 className='logo'>SignIn/LogIn</h1></Link>
    <div className='search-box'>
                <input type="text"  placeholder='Search Product' />
            </div>
    <Link to="/cart">
    <div className="cart-div">
        <span>{result.length}</span>
        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""/>
    </div></Link>
    
</div>
  )
}

export default NavBar