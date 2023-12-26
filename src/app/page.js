"use client"          
import React, { useContext, useEffect, useState } from 'react'
import { GetData } from '../../utils/request'
import SortedPage from './components/sortedPage'
import Cart from './cart/page'
import { Context } from './context/store'
// import InfoIcon from '@mui/icons-material/Info';
import Image from 'next/image'

function Page() {

  const {cartItems,setCartItems,handleAddToCart}=useContext(Context)
  const [sortedValue, setSortedValue] = useState(null)
  const [data, setData] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [toolTipVisible,setToolTipVisible]=useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetData();
        setData(result)
      } catch (err) {
        console.log(err)
      }
    };
    fetchData()
  }, [])

  const handleSort = () => {
    if (sortedValue && sortedValue!=='all') {
      return <SortedPage data={data} sortedValue={sortedValue} />;
    }else if(sortedValue=='all'){
      setSortedValue(null) 
      return( <div>
      {data.map((item) => (
        <div key={item.id} className='border-2 m-4'>
          <h1>{item.title}</h1>
          <Image className='w-[100px]' src={item.image} alt={item.title}        width={220} height={330}></Image>
          <h2>${item.price}</h2>
          <button className='border-2 m-2 p-1'
          onClick={()=>handleAddToCart(item)}
          >Add to cart</button>
            
        </div>
      ))}
    </div>)
  
    }
     else {
      return (
        <div className='flex flex-wrap justify-evenly items-center text-center'>
          {data.map((item) => (
            <div key={item.id} className=' bg-white rounded-[12px] py-6 w-[40%]  p-2 flex flex-col m-4 '>
              <Image className='w-[80%] lg:w-[30%] mx-auto' src={item.image} alt={item.title}
                      width={220} height={330}
              ></Image>          
              <h1 className='font-bold my-2 h-[45px] overflow-hidden'>{item.title}</h1>
              <h2>${item.price}</h2>
              <button className='mx-auto mt-2 bg-black text-white max-w-[200px] p-1 px-4 rounded-[10px] text-sm py-2 font-mono font-bold'
              onClick={()=>handleAddToCart(item)}
              >Add to cart</button>
            </div>
          ))}
        </div>
      )
    }
  }

  return (
    <>
      <div >
        <div className='flex   lg:px-[20%]  p-2 mb-6'>
        <div
        onMouseEnter={()=>setToolTipVisible(true)}   
        onMouseLeave={()=>setToolTipVisible(false)}>
        <h1 title='hello' className='relative  m-3  w-[30px] h-[30px] rounded-[50%] bg-black text-center pt-[2px] text-white'>i</h1>
        {toolTipVisible && <h2 className='text-white bg-black z-3 absolute rounded-[10px]  p-2 lg:text-[1rem] text-[.7rem]'>Welcome to nexshop!</h2> }
        </div>
        <div>
          <select
            className='border-2 px-2 bg-transparent border-black m-2 p-1 rounded-[15px]'
            onChange={(event) => setSortedValue(event.target.value)}
          >
            <option value={'all'}>sort by</option>
            <option value={"men's clothing"}>men's clothing</option>
            <option value={"women's clothing"}>women's clothing</option>
            <option value='electronics'>electronics</option>
            <option value='jewelery'>jewelery</option>
          </select>
        </div>
</div>
        <div>{handleSort()}</div>
      </div>
    </>
  );
}

export default Page;
