import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {

     const  navigate = useNavigate();
    const handleClick =()=>{
        navigate("/contact")
    }

    return(
        <div className="bg-slate-300 py-12">      
            <h1 className="font-bold text-left text-7xl">
            Home Repair Service
             </h1>
             <br></br>
              <img 
                className="h-auto max-w-5xl xl:bg-transparent"
            src="https://img.freepik.com/premium-photo/young-happy-african-man-construction-worker-smiling-while-giving-peace-sign_251136-39636.jpg?w=1380"
            alt="smiling construction worker"
           />
            <p className="text-4xl py-14"> Find amazing home repair services made for you. We'll connect you to our repair professionals. </p>
            
                <button onClick={handleClick} className="h-20 px-14 m-8 text-lg text-black-500 transition-colors duration-150 bg-slate-600 rounded-lg focus:shadow-outline hover:bg-gray-400">
                    Contact Us 
                </button>
                
        </div>
    )
}

export default Home;