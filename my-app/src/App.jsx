//import { useState } from 'react'
import './App.css'
import { Route ,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/ProductContainer';
import Cart from './components/Cart';
import Login from './components/Login';
import ProductContainer from './components/Home';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/Productcontainer' element={<Home/>}/>
        <Route path='/cart' exact element={<Cart/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/' element={<ProductContainer/>}/>
      </Routes>
    </div>
  )
}
export default App;
