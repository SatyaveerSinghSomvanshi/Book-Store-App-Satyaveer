import React from 'react'
import {useForm}from 'react-hook-form'
import {Route,Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Login from './Login'
export default function 




Signup() {
  const {
    register, handleSubmit,formState: { errors }, } = useForm()
  const onSubmit= (data) => console.log(data) ;
  return (
    <>
      
     
<div className="flex justify-center items-center h-screen  ">
  <div className="modal-box dark:bg-slate-900  flext justify-center items-center border:rounded-md outline-none  
       dark:text-white ">
    <form    onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"> ✕ </Link>
   

    <h3 className="font-bold text-lg">Signup</h3>
    
    
    <div className='mt-4 space-y-2 py-3'><span>Name</span>
    <br/>
    <input type='text' placeholder='Enter your full name' className='w-80 px-3  py-1 border:rounded-md outline-none' {...register("Name",{required:true})}/><br/>
    {errors.password && <span className='text-sm text-red-500' >This Filed is necessary</span>}
    </div>
    <div className='mt-4 space-y-2 py-3'><span>Email</span>
    <br/>
    <input type='text' placeholder='Enter your email' className='w-80 px-3  py-1 border:rounded-md outline-none'{...register("email",{required:true})} /><br/>
    {errors.email && <span className='text-sm text-red-500' >This Filed is necessary</span>}
    </div>

    <div className='mt-4 space-y-2 py-3'><span>Create Password</span>
    <br/>
    <input type='password' placeholder='Create password' className='w-80 px-3  py-1 border:rounded-md outline-none'{...register("password",{required:true})} /><br/>
    {errors.password && <span className='text-sm text-red-500' >This Filed is necessary</span>}
    </div>
    <div className='mt-4 space-y-2 py-3'><span>Re-Enter Password</span>
    <br/>
    <input type='password' placeholder='Re-enter  password' className='w-80 px-3  py-1 border:rounded-md outline-none'{...register("Re-enter Password",{required:true})} /><br/>
    {errors.password && <span className='text-sm text-red-500' >This Filed is necessary</span>}
    </div>
    <div className='flex  justify-around mt-4'> 
        <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-150">Signup</button>
        <p>Already Have Account ?{" "} <button onClick={()=> document.getElementById("my_modal_3").showModal()} className='text-blue-500 cursor-pointer underline'>Login</button>{" "}<Login/></p>
    </div> </form>
  </div>
  </div>

    </>
  )
}
