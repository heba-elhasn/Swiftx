import React, { useEffect, useState} from 'react'
import Product from '../product/Product'
import { Link } from 'react-router-dom'
// import {ProductDetailsPage} from '../pages/productDetails/ProductDetailsPage.js'

import './style.css'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink
  } from "@apollo/client"
 
  import gql from 'graphql-tag';
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000'
  });
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });
const getProductsQuery = gql`
{
  categories {
    name
    products {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
}`




const Products = ()=> {

    
    
       const [data, setData] = useState([])
       const [cart , setCart] = useState([])

        
          useEffect(()=>{
              client.query({
                query: getProductsQuery
              }).then(response=>{
                  const allProducts = []
                  let ProductsData = response.data.categories
                  console.log(ProductsData)
                  for( var i=0; i< ProductsData.length; i++){
                    
                      allProducts.push(...(ProductsData[i]['products']))
                                                
                        }
                       const uniqeProducts =   [...new Set(allProducts)];
                       console.log(uniqeProducts)
              
              setData(uniqeProducts)}).catch(error=>console.log(error))
                          },[])
            

        
   
        return (

     <div className='parent-container'>
        <h2 className='cateogry'> All</h2>
        <div className='products-container'>
            {data.map((item) => (
        
              
        <Product item={item} key={item.id} />
        
      ))}
    </div>
    </div>
  );
};




export default Products;


