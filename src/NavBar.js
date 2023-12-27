import React from "react";
import { Link } from "react-router-dom";

function NavBar(){


return(
<div>
    <li>
        <Link to="home">
            Home
        </Link>

    </li>
    <li>
        <Link to="Contact">
            Contact
        </Link>

    </li>

</div>
)

}

export default NavBar;