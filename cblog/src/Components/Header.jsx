import React from 'react'
import { Link,Element } from 'react-scroll'


function Header() {
  return (
    <div name='home' className=' p-6 px-20  flex items-center justify-between w-full bg-[#D9D9D9] pb-20' >
        <div >
          <img className='w-[90px] ml-16 ' src=".././src/Images/logo.png" alt="" /> 
        </div>
        <div className='flex items-center pr-3 gap-20'>
          <Link to='home' smooth={true} duration={500} className="cursor-pointer">
           <div className='font-serif font-semibold text-2xl  hover:scale-110'>
             Home
           </div>
          </Link>

          <Link to='news' smooth={true} duration={500} className="cursor-pointer">
           <div className='font-serif font-semibold text-2xl  hover:scale-110'>
             Technews
           </div>
          </Link>
          <Link to='event' smooth={true} duration={500} className="cursor-pointer">
           <div className='font-serif font-semibold text-2xl  hover:scale-110'>
             Events
           </div>
          </Link>
          <Link to='team' smooth={true} duration={500} className="cursor-pointer">
           <div className='font-serif font-semibold text-2xl  hover:scale-110'>
             Team
           </div>
          </Link>
        {/* <div className='pl-4  font-serif font-medium text-lg'>
            <img className='w-[30px]' src=".././src/Images/menu.png" alt="" />
        </div> */}
        </div> 
    </div>
  )
}

export default Header