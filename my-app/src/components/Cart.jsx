import React from 'react'
import './Cart.css'
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
//import Products from './Products'

const Cart = () => {
  const [{basket}, dispatch] = useStateValue()
  return (
    <div className='cart'>
        <div className="cart_left">
          <img className='cart_img' src="https://www.shutterstock.com/image-photo/grocery-shopping-cart-260nw-363658811.jpg" alt="" />
          <div>
            <h2 className='cart_title'>Your Shoping Basket</h2>
              {basket.map(item => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
          </div>

        </div>
        <div className="cart_right">
          
          <Subtotal/>

        </div>

    </div>
  )
}

export default Cart