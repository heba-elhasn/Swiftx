import React from 'react'
import CartItem from './CartItem'
import './style.css'

const Cart = ()=> {
   
        return (
            <div className='cart-container'>
                <h2> CART</h2>
                <CartItem />
                <CartItem />
                <CartItem />
                
            </div>
        )
    }

    export default Cart