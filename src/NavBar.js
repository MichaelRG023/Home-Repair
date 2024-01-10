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
<div className="bg-amber-500">
    <img src="https://t3.ftcdn.net/jpg/00/79/67/48/360_F_79674837_Jn4HbqZGciL1jMeobbM6xNOUUjen936J.jpg" alt="Company logo" />  
     
     <div onClick={handleClick}>
         {!nav ?<FaBars/>: <FaTimes/>}
     </div>
     
    <p >
        <Link to="/" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
            Home
        </Link>

    </p>
    <p>
        <Link to="Contact" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
            Contact
        </Link>
    </p>
</div>

)

}

export default NavBar;