import React, { useEffect, useState ,useContext} from 'react'
import { Context } from '../context/store'
import Image from 'next/image'
function SortedPage({data,sortedValue}) {

const {cartItems,setCartItems,handleAddToCart}=useContext(Context)

const [sortedData,setSortedData]=useState([])
const[addToCart,setAddToCart]=useState([])


useEffect(()=>{
    const fetchData=async ()=>{
        try{
            const response=await fetch(`https://fakestoreapi.com/products/category/${sortedValue}`)
            const result =await response.json()
            setSortedData(result)
        }
        catch(err){
            console.log(err)
        }
    }
    fetchData()
},[sortedValue])

  return (
    <>
    <div className='flex flex-wrap justify-evenly items-center text-center'>
    {sortedData.map((item)=>(
            <div key={item.id} className='bg-white rounded-[12px] py-6 w-[40%]  p-2 flex flex-col m-4 '>
              <Image className='w-[80%]    lg:w-[30%] mx-auto' src={item.image} alt={item.title}
             width={1500}
             height={1500} ></Image>          
              <h1 className='font-bold my-2 h-[45px] overflow-hidden'>{item.title}</h1>
              <h2>${item.price}</h2>
              <button className='mx-auto mt-2 bg-black text-white max-w-[200px] p-1 px-4 rounded-[10px] text-sm py-2 font-mono font-bold'
              onClick={()=>handleAddToCart(item)}
              >Add to cart</button>
            </div>
          ))

    }</div>
    </>
  )
}

export default SortedPage