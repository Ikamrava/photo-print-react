import React from 'react'
import {Context} from "../Context"
import Image from '../components/Image'
import { useContext } from 'react'
import {getClass} from "../utils/index.js"
import '../App.css'


function Photos() {
  const {allPhotos} = useContext(Context)
  

  const allimg = allPhotos.map((img , i)=>{
    
    return(
      <Image key={img.id} img={img} className={getClass(i)} />
    )
  }) 
  return (
    <main className="photos">
      {allimg}
    </main>
  )
}

export default Photos
