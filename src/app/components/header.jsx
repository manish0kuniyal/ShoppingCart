"use client"
import Link from 'next/link'
import React,{useContext,useState} from 'react'
import { Context } from '../context/store'

function Header() {
  
  const { cartItems, setCartItems, handleAddToCart } = useContext(Context)
  return (<>
  <div className=' p-3 lg:px-[20%] px-[7%] flex justify-between items-center'>
    <Link href='/' className=' text-[1.3rem]'>neXshop</Link>
    <Link href='/cart' className='font-bold text-[1rem] '>
      <h1>Cart</h1> 
    </Link>
    </div>   
    </>
  )
}

export default Header