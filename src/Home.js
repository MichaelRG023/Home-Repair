import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {

     const  navigate = useNavigate();
    const handleClick =()=>{
        navigate("/contact")
    }

    return(
        <div>      
            <h1>
            Home Repair Service
             </h1>
                <img
            src="https://img.freepik.com/premium-photo/young-happy-african-man-construction-worker-smiling-while-giving-peace-sign_251136-39636.jpg?w=1380"
            alt="smiling construction worker"
            className=""/>
                 <p> 
                     Find amazing home repair services made for you. We'll connect you to our repair professionals.
                 </p>
                 
                     <button onClick={handleClick} className="btn btn-success">Contact Us
                     </button>
        </div>
    )
}

export default Home;