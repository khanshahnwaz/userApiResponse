import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Api =  () => {
  
    const[userData,setUserData]=useState([])
      useEffect(()=>{
        const data= async ()=>{
            const response =await fetch('http://localhost:3001/',{
              method:'GET'
            });
            const temp=await response.json();
            console.log(temp)
            setUserData(temp);
        }
        data()
      },[])
    const list=userData.map(item=>{
      return<li   key={item.id}>Name &rarr;{item.name}<br/>Username &rarr;{item.username}<br/>Website &rarr;{item.website}<br/>Email&rarr; {item.email}<br/><br/></li>
     
    }) 
  return (
   
        <ul className='list-disc text-center text-2xl font-bold tracking-wide '>
        {list}</ul>
  )
}

export default Api