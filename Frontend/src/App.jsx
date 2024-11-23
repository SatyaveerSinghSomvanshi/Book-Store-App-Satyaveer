import react from 'react'
import {Route,Routes}from 'react-router-dom'

import Login from './components/Login'
import About from './components/About'
import Home from './Home/Home'
import Contact from './components/Contact'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
export default function App() {
  return (
    <>  
   <div className="dark:bg-slate-900 dark:text-white" >
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Course' element={<Courses/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    
   </Routes></div>
   </>
  )
}
