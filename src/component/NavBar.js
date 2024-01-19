import React, { useState } from "react";
import { Link } from "react-router-dom";
import{
    FaBars,
    FaTimes,
} from 'react-icons/fa'

function NavBar(){
    const [nav, setNav] = useState(false);
    const handleClick=()=>setNav(!nav);


return(
<div className="bg-zinc-950 h-40 ">
    <img src="https://t3.ftcdn.net/jpg/00/79/67/48/360_F_79674837_Jn4HbqZGciL1jMeobbM6xNOUUjen936J.jpg" alt="Company logo" className="h-24 max-w-xs bg-gradient-to-tl from-blue-500 to-cyan-500" />  
        <div className="text-slate-50"onClick={handleClick}>
         {!nav ?<FaBars/>: <FaTimes/>}
      </div>
         <nav className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse ">
            <Link to="/" className="block py-2 px-3 text-white  rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 flex pl-9 md:pl-0 text-slate-50 hover:text-blue-800">
              Home
            </Link> 
              <Link to="Contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 text-white dark:hover:text-white md:dark:hover:bg-transparent">
                 Contact
              </Link>
         </nav>
       
      
        
</div>

)

}

export default NavBar;