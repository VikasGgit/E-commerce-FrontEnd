import React from 'react'
import Navbar from './customer/components/Navigation/navbar'
import Homepage from './customer/Pages/Homepage/Homepage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'

const App = () => {
  return (
    <>
    <Navbar  />
    {/* <Homepage/> */}
    <Product/>
    <Footer/>
    </>
  )
}

export default App