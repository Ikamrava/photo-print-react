import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Cart from './pages/Cart'
import Photos from './pages/Photos'
import {Routes, Route, Link} from 'react-router-dom';





function App() {
  
  return (
   <div className='wrapper'>
    <Header />
    <Routes>
    <Route path="/" element={<Photos/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    </Routes>

      
       
   </div>
  )
}

export default App
