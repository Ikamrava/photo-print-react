import React from 'react'
import { Link } from 'react-router-dom'
import {Context} from "../Context"
import { useContext } from 'react'


function Header() {
  const {cart} = useContext(Context)
  const cartClassName = cart.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
  return (
    <header>
        <h2><Link to="/">Pic Some</Link></h2>
        <Link to="/cart"><i className={`${cartClassName} ri-fw ri-2x`}></i>
        <span>{cart.length}</span>
        </Link> 
      
        
    </header>
    )
  
}

export default Header
