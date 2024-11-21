import React, { useState } from 'react'
import './Product.css'
import {useStateValue}  from './StateProvider'

const Products = ({id,title,price,weight,image, rating}) => {
    const [{basket}, dispatch] = useStateValue();
    console.log("this is the basket",basket);
    

    const addTOBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    };
  return (
    <div className='products'>
        <div className="product_info">
            <p className="title">{title}</p>
            <p className="product_price">
                <small>S</small>
                <strong>{price}</strong>
                <p>{weight}</p>
            </p>
            <div className='rating'>
                {Array(rating).fill().map((_, i) => (
                    <p>☆</p>
                ))}
            </div>
           
        </div>
        
        <img className='product_img' src={image} alt="" />
        <button onClick={addTOBasket}>Add to Basket</button>
        

    </div>
  )
}

export default Products