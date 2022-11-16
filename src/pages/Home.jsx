import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Product from '../components/Products'



export default function Home() {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories/>
      <Product />
    </div>
  )
}
