import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import Cart from '../Cart/Cart'

const OrderSummary = () => {
  return (
    <div>
        <div className='p-5 shadow-md' >
            <div className='px-3 shadow-md' >
            <AddressCard/>
            </div>
            
            <Cart/>

        </div>
    </div>
  )
}

export default OrderSummary