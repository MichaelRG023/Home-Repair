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
<div>
    <img src="https://t3.ftcdn.net/jpg/00/79/67/48/360_F_79674837_Jn4HbqZGciL1jMeobbM6xNOUUjen936J.jpg" alt="Company logo" />  
     
     <div onClick={handleClick} className="">
         {!nav ?<FaBars/>: <FaTimes/>}
     </div>
     
    <p>
        <Link to="/">
            Home
        </Link>

    </p>
    <p>
        <Link to="Contact">
            Contact
        </Link>
    </p>
</div>

)

}

export default NavBar;