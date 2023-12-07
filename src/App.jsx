import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import './App.css'
import Product from './pages/Product'
const App = () => {
  return (
    <div className='app-main'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App