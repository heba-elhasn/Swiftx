
import { Thumbnail } from '../../components/gallery/ThumbnailGallery2'
import './style.css'

const Cart = ()=> {
    
        return (
         <div className='cart-item-container'>
               
            <div className='cart-item-left'>
                <h3 className='title'>title</h3>
                <h3 className='name'>name</h3>
                <h3 className='price'>$50.0</h3>
                <div class="cart-pagination">
                <a href="#" class="active">M</a>
                 <a href="#">L</a>
                </div>

         </div>
                <div className='cart-item-right'>  
                    <div className='qn-selectors'>
                   
      <button className="plus-btn" type="button" name="button" >+</button>
        {/* <img src="plus.svg" alt="" /> */}
        
    
      <input type="text" name="name" value="1"/>
      <button className="minus-btn" type="button" name="button">-</button>
        
    
 
                    </div>
                    <div className='tn-img'>
                    <Thumbnail imgUrl="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087" />
                    </div>
                </div>
                
            </div>
        )
    }

    export default  Cart