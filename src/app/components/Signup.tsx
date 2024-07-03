// import React from 'react'

// const Signup = () => {
//   return (
//     <div>
//       <div >
//         <center>
//                 <br /><br />   
//         <h1 className="text1 m-3">Get started with Franchain</h1>
//         <p className='text2 m-4 text-gray-700'>Create an account in 5 minutes.</p>
//         </center>
        
//         <form action="" className='mt-8'>  
//                 <div className="container">
//                         <p >First name <br /> <input type="text" className='input' required/></p>
//                         <br />
//                         <p>Last name <br /> <input type="text" className='input' required/></p>
//                         <br />
//                         <p>Business name and HQ location <br /> <input type="text" className='input' required/></p>
//                         <br />
//                         <p>Work email<br /> <input type="email" className='input' required/></p>

//                         <br />
//                         <p>Password<br /> <input type="password" className='input '  maxLength={12} required /></p>
//                         <p className='mt-4 text-red-500'   >Password must be at least 12 characters</p>
                        
//                        <div className='mt-0'>
//                        <button className='button text-white mt-8' type='submit'><p>Sign Up</p></button>
//                         </div>
                    
                     
                    
//                 </div>
//         </form>
//         <p className='text-gray-700 p-5 mt-0'>By clicking “Start Application“, I agree to Mercury’s Terms of Use, Privacy Policy and to receive electronic communication about my accounts and services per Mercury’s Electronic Communications Agreement, and acknowledge receipt of Mercury’s USA PATRIOT Act disclosure.</p>
//       </div>
//     </div>
//   )
// }

// export default Signup
// "use client";
// import React, { useState } from 'react';

// const Signup = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e:any) => {
//     const value = e.target.value;
//     setInputValue(value);

//     if (value.length > 0 && value.length < 12) {
//       setErrorMessage('Password must be at least 12 characters');
//     } else {
//       setErrorMessage('');
//     }
//   };

//   return (
//     <div>
//       <div>
//         <center>
//           <br /><br />
//           <h1 className="text1 m-3">Get started with Franchain</h1>
//           <p className='text2 m-4 text-gray-700'>Create an account in 5 minutes.</p>
//         </center>

//         <form action="" className='mt-8'>
//           <div className="container">
//             <p>First name <br />
//               <input
//                 type="text"
//                 className='input'
              
//                 required
//               />
//             </p>
           
//             <br />
//             <p>Last name <br />
//               <input type="text" className='input' required />
//             </p>
//             <br />
//             <p>Business name and HQ location <br />
//               <input type="text" className='input' required />
//             </p>
//             <br />
//             <p>Work email<br />
//               <input type="email" className='input' required />
//             </p>
//             <br />
//             <p>Password<br />
//               <input 
//               type="password"
//               value={inputValue}
//               onChange={handleInputChange}
//                className='input' 
//               maxLength={12} 
//               required />
//             </p>
//             {errorMessage && <p className='mt-4 text-red-500'>{errorMessage}</p>}
          

//             <div className='mt-0'>
//               <button className='button text-white mt-8' type='submit'><p>Sign Up</p></button>
//             </div>
//           </div>
//         </form>
//         <p className='text-gray-700 p-5 mt-0'>By clicking “Start Application“, I agree to Mercury’s Terms of Use, Privacy Policy and to receive electronic communication about my accounts and services per Mercury’s Electronic Communications Agreement, and acknowledge receipt of Mercury’s USA PATRIOT Act disclosure.</p>
//       </div>
//     </div>
//   )
// }

// export default Signup;
"use client";
import React, { useState } from 'react';

const Signup = () => {
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');
  const [inputErrorMessage, setInputErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handleInputChange = (e:any) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0 && value.length < 7) {
      setInputErrorMessage('Input must be at least 7 characters');
    } else {
      setInputErrorMessage('');
    }
  };

  const handlePasswordChange = (e:any) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length > 0 && value.length < 12) {
      setPasswordErrorMessage('Password must be at least 12 characters');
    } else {
      setPasswordErrorMessage('');
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (password.length < 12) {
      setPasswordErrorMessage('Password must be at least 12 characters');
    } 
  };

  return (
    <div>
      <div>
        <center>
          <br /><br />
          <h1 className="text1 m-3">Get started with Franchain</h1>
          <p className='text2 m-4 text-gray-700'>Create an account in 5 minutes.</p>
        </center>

        <form action="" className='mt-8' onSubmit={handleSubmit}>
          <div className="container">
            <p>First name <br />
              <input
                type="text"
                className='input'
             
                required
              />
            </p>
         
            <br />
            <p>Last name <br />
              <input type="text" className='input' required />
            </p>
            <br />
            <p>Business name and HQ location <br />
              <input type="text" className='input' required />
            </p>
            <br />
            <p>Work email<br />
              <input type="email" className='input' required />
            </p>
            <br />
            <p>Password<br />
              <input
                type="password"
                className='input'
                value={password}
                onChange={handlePasswordChange}
                maxLength={12}
                required
              />
            </p>
            {passwordErrorMessage && <p className='mt-4 text-red-500'>{passwordErrorMessage}</p>}

            <div className='mt-0'>
              <button className='button text-white mt-8' type='submit'><p>Sign Up</p></button>
            </div>
          </div>
        </form>
        <p className='text-gray-700 p-5 mt-0'>By clicking “Start Application“, I agree to Mercury&apos;s Terms of Use, Privacy Policy and to receive electronic communication about my accounts and services per Mercury’s Electronic Communications Agreement, and acknowledge receipt of Mercury’s USA PATRIOT Act disclosure.</p>
      </div>
    </div>
  )
}

export default Signup;
