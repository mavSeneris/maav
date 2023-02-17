import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/product-list/:category" element = {<ProductList />}/>
        <Route path="/product/:id" element = {<Product />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
