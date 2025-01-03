import React from 'react'
import Logo from '../../assets/Logo.jpg'
import ListCar from '../../assets/ListCar.png'

import "../../Font/Poppins/Poppins-SemiBold.ttf";
import { ChevronDown, Search , Menu} from 'lucide-react';


const Navbar = () => {
         
  return (
  


<header>

<div className='navbar-container   w-[100%] h-[10rem] bg-[black] flex items-center justify-center gap-[18rem]'>

<div><img src={Logo} alt="Logo" className='w-[20rem] logo' /></div>


<div className='flex items-center gap-[1.5rem]'>

<div>
<ul className="navigate-link text-[#ffffff] flex gap-[0.9rem] items-center justify-center font-semibold text-[1.9rem]">
  <li className="relative flex gap-[0.1rem] group">
    <span className="relative ">
      Home
      <span className="absolute left-1/2 top-[3rem] transform -translate-x-1/2 w-0 h-[4px] bg-[#E63946] group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </span>
    <ChevronDown className="mt-[0.5rem] drop-down" />
  </li>
  <li className="relative flex gap-[0.2rem] group">
    <span className="relative">
    About
      <span className="absolute top-[3rem] left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-[4px] bg-[#E63946] group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </span>
    <ChevronDown className="mt-[0.5rem] drop-down" />
  </li>
  <li className="relative flex gap-[0.2rem] group">
    <span className="relative hover:cursor-pointer ">
    Faq
      <span className="absolute top-[3rem] left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-[4px] bg-[#E63946] group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </span>
    <ChevronDown className="mt-[0.5rem] drop-down" />
  </li>
  <li className="relative flex gap-[0.2rem] group">
    <span className="relative hover:cursor-pointer ">
    Contact
      <span className="absolute top-[3rem] left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-[4px] bg-[#E63946] group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </span>
    <ChevronDown className="mt-[0.5rem] drop-down" />
  </li>

</ul>

</div>



<div className='flex items-center gap-[0.5rem]'>
<button class=" login px-6 py-2 bg-transparent text-white font-medium rounded-lg border-2 border-[#E63946] relative overflow-hidden group transition-all duration-500 text-[1.7rem]">
  <span class="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-red-500 to-white transform scale-x-0 group-hover:scale-x-100 transition-all duration-700 origin-left"></span>
  <span class="relative group-hover:text-white ">Login</span>
</button>
<button class=" register px-6 py-2 bg-transparent text-white font-medium rounded-lg border-2 border-[#E63946] relative overflow-hidden group transition-all duration-500 text-[1.7rem] hover: bg-[black]">
  <span class="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-red-500 to-white transform scale-x-0 group-hover:scale-x-100 transition-all duration-700 origin-left"></span>
  <span class="relative group-hover:text-white ">Register</span>
</button>
<button class="navbar-btn flex items-center justify-center px-6 py-4 bg-transparent text-white font-semibold border-2 border-transparent rounded-lg relative overflow-hidden group transition-all duration-500">
  <span class="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-400 group-hover:from-yellow-400 group-hover:to-red-500 transition-all duration-700"></span>
  
  <img src={ListCar} alt="Car" class="w-20 h-11 object-cover mr-3 transition-all duration-500 rotate-0 group-hover:rotate-6" />
  
  <span class="relative z-10 text-[1.5rem] listing">Add Listing</span>
</button>


<Menu  className='text-white bar'/>


</div>

</div>


</div>




</header>



  )
}

export default Navbar