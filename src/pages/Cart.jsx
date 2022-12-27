import React, { useState } from 'react'
import {Context} from "../Context"
import { useContext } from 'react'
import CartItem from '../components/CartItem'


function Cart() {
  const[ordering,setordering] = useState("Place Order")
  const {cart,emptyCart} = useContext(Context)
  localStorage.setItem("cartItems", JSON.stringify(cart));

  const cartItemElements = cart.map(item => (
        <CartItem key={item.id} item={item} />
    ))

function placeOrder(){
  setordering("Ordering ...")

  setTimeout(()=>{
    setordering("Order Placed")
    emptyCart()
  },3000)
}


  return (
    <main className="cart-page">
        <h1>Check out</h1>
        {cartItemElements}
        <p className="total-cost">Total: {"£"+cart.length * 5.99}</p>
            <div className="order-button">
                {cart.length>0 ? <button onClick={()=>{placeOrder()}}>{ordering}</button>:
                <p>You have no items in your cart.</p>
                }
            </div>
    </main>
  )
}

export default Cart
