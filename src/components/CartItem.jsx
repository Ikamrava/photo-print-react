
import React from 'react'
import {Context} from "../Context"
import { useContext } from 'react'
import { useState } from 'react'
import PropTypes from "prop-types"
import useHover from "../useHover"

function CartItem({item}) {
  const {removeFromCart} = useContext(Context)
  // const [hovered,setHovered] = useState(false)
  const [hovered, ref] = useHover()

  let classname = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

  return (
       <div className="cart-item">
            <i className={classname} 
            onClick={()=>removeFromCart(item.id)}
            ref={ref}
            ></i>
            <img src={item.url} width="130px" />
            <p>£5.99</p>
        </div>
  )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
