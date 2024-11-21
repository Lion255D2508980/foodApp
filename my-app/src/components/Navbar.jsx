import React from 'react'
import { BsFillHandbagFill } from "react-icons/bs";
import { Link, } from 'react-router-dom';
import './Navbar.css'
import { useStateValue } from './StateProvider';

const Navbar = () => {
  const [{basket}, dispatch] = useStateValue();
  return (
    <nav className='navbar'>
      <Link to='/'>
      <h2>Onlineshop</h2>
      </Link>
      <Link to={'/ProductContainer'}>
        <h2>Products</h2>
      </Link>
      

      <Link to={"/login"}>
        <ul className='sign_in'>
          <li><a href="#">Sign In</a></li>
          <li className='name'>Hello name</li>
        </ul>
      </Link>
      
      <Link to='/cart'>
        <div className="nav-bag">
          < BsFillHandbagFill className='bag'/>
          <span className="bag-quantity">
            {/*optional chaining*/}
            <span>{basket?.length}</span>
          </span>
        </div>
      </Link>
      

     
     
    </nav>
  )
}

export default Navbar