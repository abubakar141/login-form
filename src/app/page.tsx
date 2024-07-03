import React from 'react'
import Sign from './components/Section'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
const page = () => {
  return (
    <div>
      <Navbar />
      <Signup />
           {/* <Sign/> */}
    </div>
  )
}

export default page
