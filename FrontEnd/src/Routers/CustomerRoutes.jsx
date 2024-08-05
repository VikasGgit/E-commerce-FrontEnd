import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../customer/Pages/Homepage/Homepage'
import Navbar from '../customer/components/Navigation/navbar'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductsDetails from '../customer/components/Product/ProductsDetails'
import Cart from '../customer/components/Cart/Cart'
import CheckOut from '../customer/components/CheckOut/CheckOut'
const CustomerRoutes = () => {
    // <Navbar  />
    // {/* <Homepage/> */}
    // {/* <Product/> */}
    // {/* <ProductsDetails/> */}
    // {/* <Cart/> */}
    // {/* <CheckOut/> */}
    // <OrderDetails/>

    // <Footer/>

  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>} />
            <Route path="/product/:productId" element={<ProductsDetails/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<CheckOut/>} />
            <Route path="/payment/:orderId"  element={<div>
              Payment Success
            </div>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default CustomerRoutes