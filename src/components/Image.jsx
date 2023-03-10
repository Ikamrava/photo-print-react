import React, { useState } from "react"
import { useContext } from 'react'
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../useHover"

import '../App.css'

function Image({className,img}) {
    const [hovered, ref] = useHover()
    const {toggleFavorite,addtoCart,cart,removeFromCart} = useContext(Context)
   

    
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon(){
        const alreadyInCart = cart.some(item => item.id === img.id)
        if(alreadyInCart){
           return <i className="ri-add-circle-line cart" onClick={() => removeFromCart(img.id)}></i>
        }else if(hovered){
            return <i className="ri-add-circle-line cart" onClick={() => addtoCart(img)}></i>
        }
    }
     
    return (
        <div className={`${className} image-container`}
        ref={ref}
      >  

         <img src={img.url} className="image-grid" /> 
            
            {heartIcon()}
            {cartIcon()}
            
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image