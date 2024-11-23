import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'
export default function Course() {
  return (

    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20  px-4  ">

      <div className="mt-16 items-center justify-center py-9 text-center">
        <h1 className='text-2xl md:text-4xl'> We are delighted to have you {"  "}
        <span className='text-pink-500'> Here:) </span>
      </h1>
      <p className='mt-10'>Purchasing a course from the @bookstore@ app provides a convenient and 
        efficient way to access high-quality educational content. 
        The app allows users to browse, purchase, and instantly access courses
         on a wide range of subjects, from textbooks to specialized learning materials.
          The app offers a seamless 
          learning experience, it provides both free and paid course options, catering to various learning needs and budgets.
             </p>
            <Link to="/"> <button  className='bg-pink-500 text-white
              mt-6 px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>{list.map((item)=>(
        <Cards key={item.id} item={item}/>))}
      </div>
    </div>
    </>
  )
}

