import React from 'react'
import Navbar  from './Navbar'
import Treebook from '../../public/Treebook.png'
export default function About() {
  return (
    
       <><Navbar/>
       
       <div className="object-center h-full w-screen mt-10 bg-gradient-to-r from-pink-500 to-violet-500 " >
    <h1 className="font-extrabold text-5xl ml-8   lg:ml-auto lg:text-center lg:mt-16 mt-12 py-4 text-black dark:text-white">Our Story</h1> 

    <div className="flex flex-col sm:flex-row sm:space-x-4 ">
        <div className=" p-4 sm:w-1/3">
            <h1 className="font-extrabold text-white shadow-2xl text-5xl md:mt-32 border-10 rounded-xl dark:bg-slate-900  dark:text-white">Bookstore is India’s Largest and Most Recommended Online Bookstore. offering 40+ Million selections.</h1>
        </div>

        <div className=" p-4 flex justify-center items-center sm:w-1/3">
            <img src={Treebook} className="md:w-[550px] md:h-[560px] md:ml-6 hover:scale-110" alt="Treebook" />
        </div>

        <div className=" p-4 flex justify-center items-center sm:w-1/3">
            <h1 className="text-2xl text-center shadow-2xl dark:bg-slate-900 dark:text-white text-white border-3 rounded-xl">At Book Store, we believe that everyone should have easy access to great literature. Our app is designed to make reading more  convenient, enjoyable and social. Whether you're on the go, at home, or anywhere in between, you can find your next great read with just a few taps.
        Thank you for being part of the Book Store community. We are excited to accompany you on your reading journey.
</h1>
        </div>
    </div>
</div>


    
    </>
  )
}
