import { useState } from 'react';
import ThumbnailGallery2 from '../../components/gallery/ThumbnailGallery2'
import './style.css'





const ProductDetailsPage = (props)=>{
    
    const [product , setProduct] = useState(null)
    
     const {id, products}= props
        
        const ourProduct = products.find(p=>p.id === id)
       console.log(ourProduct)
       setProduct({product:ourProduct})
      
      
    
   
        return(
            <div className='PD-container'>
            
               
                     <div className='gallery'>
                       <ThumbnailGallery2  item={product}/>

             </div>
             
                <div className='right'>
                    <h3 className='brand'>brand</h3>
                    <h3 className='name'>name</h3>
                    <div className='attributes'>
                        <div className='size'>
                            <h3 className='title'>Size</h3>
                            <div className='size-selector'>
                              <div class="pagination">
                                <a href="#" >XS</a>
                                <a href="#">S</a>
                                <a href="#" class="active">M</a>
                                <a href="#">L</a>
                              </div>
                            </div>
                        </div>
                    </div>
                        <div className='price-container'>
                        <h3 className='title'>Price</h3>
                            <h3 className='price'>$ 150</h3>
                        </div>
                    <button className='addToCart'>ADD TO CART</button>
                    <p className='description'>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha </p>
                </div>

            </div>
        )
    }

    export default ProductDetailsPage 