import React from 'react'
import Navbar from './Navbar'
import ContactInfo from './contact1'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="object-center  mt-10 w-screen md:h-screen md:flex md:justify-start bg-gradient-to-r from-pink-500 to-violet-500">
        
        {/* Heading Section */}
        <div className="outline-none h-80 w-screen md:w-80 md:ml-20 md:mt-40 mt-16 mb-36 md:mb-60 text-center">
          <h1 className="font-extrabold text-5xl text-center text-white px-4 md:px-0">
            We are here to help! If you have any questions or need assistance, feel free to reach out to us.
          </h1>
        </div>

        {/* Mockup Phone Section */}
        <div className="mockup-phone border-primary ml-5 md:mt-20 md:ml-36 md:h-fit">
          <div className="camera "></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 bg-white">
              <h1 className="bg-clip-text text-transparent font-bold text-5xl m-1 py-9 bg-gradient-to-r from-pink-500 to-violet-500">
                Contact Us
              </h1>
              <h1 className="bg-clip-text text-transparent font-bold text-2xl py-1 bg-gradient-to-r from-pink-500 to-violet-500">
                Send Message
              </h1>
              <form className="grid gap-3 outline-none">
                <input type="text" className="outline-none placeholder-purple-600" placeholder="Full Name" />
                <input type="text" className="outline-none placeholder-purple-600" placeholder="Email" />
                <textarea className="outline-none placeholder-purple-600" placeholder="Type Your Message" />
              </form>
              <button className="btn m-2 btn-secondary">Send</button>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="outline-none shadow-2xl h-100 md:h-fit md:mt-40 md:mr-20">
          <ContactInfo />
        </div>
      </div>
    </>
  )
}
