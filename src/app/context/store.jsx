"use client"
import { createContext,useContext,useEffect,useState } from "react"

export const Context=createContext(null)
 
function GLobalState({children}){
    const [cartItems,setCartItems]=useState([])

    function handleAddToCart(value){
        setCartItems(prevCartItems=>[...prevCartItems,value])
    }
    useEffect(()=>{
        console.log(cartItems)
    },[])

return(
 <Context.Provider value={{cartItems,setCartItems,handleAddToCart}}>
    {children}
 </Context.Provider>  
   )
}
export default GLobalState