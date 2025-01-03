import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({id, title, image, price, rating}) => {
    const [{basket}, dispatch] = useStateValue()
    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,

        })

    }
    
  
  return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_img' src={image}  alt=''/>
            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            <div className="checkoutProduct_rating">
                {Array(rating).fill().map((_,i) => (
                    <p>☆</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>

            </div>
            <div className="checkoutProduct_description">
                <h3>Product Description:</h3>
                <p>Best Quality Product guaranted 100 percent</p>
            </div>

            
        </div>
  )
}

export default CheckoutProduct