import React from 'react'
import { useState,useEffect,useRef } from 'react'

function useHover() {
  const [hovered,setHovered] = useState(false)
  const ref = useRef(null)


  const onMouseEnter=()=>setHovered(true)
  const onMouseLeave=()=>setHovered(false)

  useEffect(()=>{
    ref.current.addEventListener("mouseenter", onMouseEnter)
    ref.current.addEventListener("mouseleave", onMouseLeave)
  },[])

  return [hovered,ref]

}

export default useHover
