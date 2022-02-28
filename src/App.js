
import './App.css';
import { useQuery, gql } from "@apollo/client";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';

import NavBar from './components/navBar/NavBar';
import Products from './components/products/Products';
import ProductDetailsPage from './pages/productDetails/ProductDetailsPage';
import CartModal from './components/modal/CartModal';

const App = ()=> {
  return (
    <Router>
    <div className="App">
      < NavBar />
      <Routes>
      <Route exact path="/" element={<Products/>}/>
      <Route path='/cart'  element={<Cart/>}/>
      <Route path='/product/:id'  element={<ProductDetailsPage/>}/>
       </Routes>
      
      
    </div>
   </Router>
  );
}

export default App;