import React from 'react'
import './style.css'
import CartItem from '../../pages/cart/CartItem.js'

const CartModal = ()=> {
   
        return (
            <div className='modal'>
                <div className='modal-head'>
                <h3>My Bag</h3><span>2 Items</span>
                </div>
                <CartItem />
                <CartItem />
               <div className='modal-total'>
                <h3>Total</h3>
                <div className='total'>$100</div>
                </div>
                <div className='modal-footer'>
                <button className='view'>VIEW BAG</button>
                <button className='checkout'>CHECKOUT</button>
                </div>

                
            </div>
        )
    }

    export default CartModal