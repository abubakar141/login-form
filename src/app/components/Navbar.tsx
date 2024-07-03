import React from 'react';
import Image from 'next/image';
import franchin from "/public/franchin.png";
import { ArrowLeftSquare, ArrowRightSquare } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Image
        src={franchin}
        alt='franchin'
        className='m-9'
        height={35}
        width={35}
      />
      <h1 className=' flex items-center ml-2'>Log in <ArrowRightSquare /></h1>
    </div>
  );
};

export default Navbar;
