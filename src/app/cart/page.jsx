"use client"
import React, { useContext } from 'react'
import { Context } from '../context/store'

const Cart = () => {
  const { cartItems, setCartItems, handleAddToCart } = useContext(Context)

  const itemFrequency = cartItems.reduce((freqMap, item) => {
    freqMap[item.id] = (freqMap[item.id] || 0) + 1
    return freqMap
  }, {})

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price
  }, 0)

  const increaseFrequency = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems, { ...prevCartItems.find((item) => item.id === itemId) }]
      return updatedCartItems
    })
  }

  const decreaseFrequency = (itemId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems]
      const itemIndex = updatedCartItems.findIndex((item) => item.id === itemId)
      if (itemIndex !== -1) {
        updatedCartItems.splice(itemIndex, 1)
      }
      return updatedCartItems
    })
  }

  return (
    <div>
      {/* <h1>Cart</h1> */}
      {Array.from(new Set(cartItems.map((item) => item.id))).map((itemId) => {
        const item = cartItems.find((cartItem) => cartItem.id === itemId)
        return (
          <div key={item.id} className=' m-2 flex items-center justify-evenly  h-[60%] p-2'>
            <div className='rounded-[15px] py-4 bg-white w-[50%] flex flex-col items-center '>
            <img src={item.image} className='w-[80%] lg:w-[20%] mx-auto' />
            <div className='my-2'>
            <button className='bg-black text-white rounded-[10px] p-1 px-4 ' onClick={() => increaseFrequency(item.id)}>+</button>
            <span className=' font-bold  p-1 px-4'>{`${itemFrequency[item.id]}`}</span>
            <button className=' bg-black text-white p-1 px-4 rounded-[10px]' onClick={() => decreaseFrequency(item.id)}>-</button>
            </div>
            </div>
            <div className='text-[.8rem] sm:text-[1rem] font-mono w-[40%]'>
            <h1>{item.title}</h1>
            <span className='font-bold'>{`X ${itemFrequency[item.id]}`}</span>
            </div>
          </div>
        )
      })}
      <div>
        <h2 className='font-bold text-[2rem] text-center my-6'>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default Cart
