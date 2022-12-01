import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/product" element = {<Product />}/>
        <Route path="/product-list" element = {<ProductList />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
