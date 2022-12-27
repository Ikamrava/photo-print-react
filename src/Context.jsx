import React, { useEffect } from "react"
import { useState } from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cart,setCart] = useState([])
   
   
    useEffect(() => {
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(res=> res.json())
    .then(data=>{
        setAllPhotos(data)
    })
  },[]);
  console.log(allPhotos)

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

    return (
        <Context.Provider value={{allPhotos,toggleFavorite,addtoCart,cart,removeFromCart}}>
            {children}
        </Context.Provider>
    )
}




export {ContextProvider, Context}
 