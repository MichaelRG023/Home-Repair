import React, { useEffect, useState } from "react"
import {AiFillStar} from 'react-icons/ai'

function Reviews(){
const [review,setReview] = useState([]);




useEffect(()=>{
    fetch("http://localhost:3030/Comments")
    .then(response => response.json())
    .then(json => setReview(json))
    .catch(error => console.log(error));
},[])




// spread operator  === "..."


 // ffc107 is going to be yellow color 

    return(
        <div className="bg-zinc-900 py-20 ">
            <h1 className="font-bold text-7xl text-gray-200 py-16">Our Reviews</h1>
            {review.map(reviews => ( 
                <div className="w-[394px] shadow-lg bg-gray-200 flex flex-wrap py-16 gap-x-12" key={reviews.id}>
                    <h2 className="font-bold text-2xl text-center">{reviews.name}</h2>
                    <p className="text-lg italic">{reviews.reviews}</p>
                    {[...Array(5)].map((star, index)=>{
                        return(
                            <label>
                            <AiFillStar
                            size={20}
                            color="#ffc107"/>
                            </label>
                            
                            

                        );
                    })}
                    
                </div>
            ))}
          
               
        </div>        
    )
}

export default Reviews;