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
         <nav className="absolute top-0 right-0">
            <Link to="/" className=" flex pl-9 md:pl-0 text-slate-50 hover:text-blue-800  w-full h-[80px] flex justify-between items-center hidden md:flex ">
              Home
            </Link> 
              <Link to="Contact" className="text-slate-50 hover:text-blue-800  w-full h-[80px] flex justify-between items-center hidden md:flex ">
                 Contact
              </Link>
         </nav>
       
      
        
</div>

)

}

export default NavBar;