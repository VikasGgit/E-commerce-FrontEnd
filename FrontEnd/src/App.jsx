import React from 'react'
import Navbar from './customer/components/Navigation/navbar'
import Homepage from './customer/Pages/Homepage/Homepage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'
import ProductsDetails from './customer/components/Product/ProductsDetails'
import Cart from './customer/components/Cart/Cart'
import CheckOut from './customer/components/CheckOut/CheckOut'
import Order from './customer/components/Order/Order'
import OrderDetails from './customer/components/Order/OrderDetails'

const App = () => {
  return (
    <>
    <Navbar  />
    {/* <Homepage/> */}
    {/* <Product/> */}
    {/* <ProductsDetails/> */}
    {/* <Cart/> */}
    {/* <CheckOut/> */}
    <OrderDetails/>

    <Footer/>
    </>
  )
}

export default App