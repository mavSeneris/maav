import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Product from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'



export default function Home() { 


  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Product />
      <Newsletter />
      <Footer />
    </div>
  )
}
