import React from 'react'
import {Link} from 'react-router-dom'
import {useForm}from 'react-hook-form'



export default function Login() {
  const {
    register, handleSubmit,formState: { errors }, } = useForm()
  const onSubmit= (data) => console.log(data) ;
  return (
    <>
      
     
<dialog id="my_modal_3" className="modal ">
  <div className="modal-box dark:bg-slate-900
       dark:text-white ">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog" >
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=> document.getElementById("my_modal_3").close()}> ✕ </Link>
  
    
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2 py-3'><span>Email</span>
    <br/>
    <input type='text' placeholder='Enter your email' className='w-80 px-3  py-1 border:rounded-md outline-none' {...register("email",{required:true})} />
    <br/>
    {errors.email && <span className='text-sm text-red-500' >This Filed is necessary</span>}
    </div>

    <div className='mt-4 space-y-2 py-3'><span>Password</span>
    <br/>
    <input type='password' placeholder='Enter your Password' className='w-80 px-3  py-1 border:rounded-md outline-none' {...register("password",{required:true})} />
    <br/>
    {errors.password && <span className='text-sm text-red-500' >This Filed is necessary</span>}
    </div>
    <div className='flex  justify-around mt-4'> 
        <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-150">Login</button>
        <p>Not registered ?<Link to="/Signup" className='text-blue-500 cursor-pointer underline'>Signup </Link>{" "}</p>
    </div>  </form>
  </div>
</dialog>
    </>
  )
}
