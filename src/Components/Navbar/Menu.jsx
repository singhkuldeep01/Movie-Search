import React from 'react'
import { useNavigate } from 'react-router-dom'

function Menu() {
  const navigate = useNavigate();

  return (
    <>
        <p onClick={
            ()=>{
                navigate('/')
            }
        } className='hover:bg-slate-100 px-3 rounded-md h-full items-center flex text-center w-full justify-center dark:hover:text-black'>Home</p>
        <p onClick={
          ()=>{
              navigate('/');
          }
        } className='hover:bg-slate-100 px-3 rounded-md h-full items-center flex text-center w-full justify-center dark:hover:text-black'>Search</p>
        
        <p onClick={()=>{
            navigate('/About')
        }} className='hover:bg-slate-100 px-3 rounded-md h-full items-center flex text-center w-full justify-center dark:hover:text-black'>About</p>
        
    </>
  )
}

export default Menu