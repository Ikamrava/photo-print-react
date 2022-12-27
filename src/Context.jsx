import React, { useEffect } from "react"
import { useState } from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    let cartItems = localStorage.getItem("cartItems");
    let localstorageCart = JSON.parse(cartItems);

    const [cart,setCart] = useState(localstorageCart)
   
   
    useEffect(() => {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(res=> res.json())
    .then(data=>{
        setAllPhotos(data)
    })
  },[]);
 

    function toggleFavorite(id){
        const updatedArr = allPhotos.map(item=>{
            if(id === item.id){
                return (
                    {...item,
                    isFavorite : !item.isFavorite}
                )
            }
            return item
        })
        setAllPhotos(updatedArr)
    }



    function addtoCart(img){
        setCart(prev=>{
             return ([...prev,img])
        })
    }

    function removeFromCart(id){
       setCart(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCart([])
    }

    return (
        <Context.Provider value={{allPhotos,toggleFavorite,addtoCart,cart,removeFromCart,emptyCart}}>
            {children}
        </Context.Provider>
    )
}




export {ContextProvider, Context}
 