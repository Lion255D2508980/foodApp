//import { useState } from 'react'
import './App.css'
import { Route ,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' exact element={<Cart/>}/>
        <Route path='/login' exact element={<Login/>}/>
      </Routes>
    </div>
  )
}
