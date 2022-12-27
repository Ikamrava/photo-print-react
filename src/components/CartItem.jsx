
import React from 'react'
import {Context} from "../Context"
import { useContext } from 'react'
import { useState } from 'react'

function CartItem({item}) {
  const {removeFromCart} = useContext(Context)
  const [hovered,setHovered] = useState(false)

  let classname = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

  return (
       <div className="cart-item">
            <i className={classname} 
            onClick={()=>removeFromCart(item.id)}
            onMouseEnter={()=>setHovered(true)}
            onMouseLeave = {()=>setHovered(false)}
            ></i>
            <img src={item.url} width="130px" />
            <p>£5.99</p>
        </div>
  )
}

export default CartItem
