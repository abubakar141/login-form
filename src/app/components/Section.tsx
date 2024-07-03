"use client";
import React from 'react'
import Image from 'next/image'
import sign from "/public/sign.jpg"
function signUp() {
  return (
       <div className='items-center'>
       
 <div className="right-container">
  <div className='image'>
 <Image 
  src={sign}
  alt='name'
  height={400}
  width={400}

  />
  <br />
  <h1 className='text'>Royalty collections, simplified. It&apos;s next level!</h1>
 <p className='text'>Revenue based invoice collection to make royalty collection as easy as...</p>
  </div>
 </div>
 <div className="WHITE-BOX">
  
 </div>
    </div>
  )
}

export default signUp
