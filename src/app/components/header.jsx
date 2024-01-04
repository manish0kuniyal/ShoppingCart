"use client"
import Link from 'next/link'
import React,{useContext,useState} from 'react'
import { Context } from '../context/store'

function Header() {
  
  const { cartItems, setCartItems, handleAddToCart } = useContext(Context)
  return (<>
  <div className=' p-3 lg:px-[20%] px-[7%] flex justify-between items-center'>
    <Link href='/' className=' text-[1.3rem]'>nexshop</Link>
    <Link href='/cart' className=' font-bold text-[1rem] '>
      <h1 className=' border-gray border-b-2' >Cart</h1> 
      {cartItems.length > 0 && (
  <span className='border-white absolute top-4  w-[10px] right-[6%] lg:right-[19.5%] bg-blue-400 h-[10px] rounded-[50%] animate-ping'></span>
          )}
    </Link>
    </div>   
    </>
  )
}

export default Header
