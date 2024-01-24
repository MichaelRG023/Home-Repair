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
 const stars =[1,2,3,4,5];

    return(
        <div className="bg-zinc-900 px-40 ">
            <h1 className="font-bold text-7xl text-gray-200 py-20">Our Reviews</h1>
            {review.map(reviews => ( 
                <ul className="w-[394px] shadow-lg bg-gray-200 flex flex-wrap py-16  gap-x-12" key={reviews.id}>
                    <h2 className="font-bold text-2xl text-center border-b-2 border-zinc-900">{reviews.name}</h2>
                    <p className="text-lg italic">{reviews.reviews}</p>
                    <p>{reviews.rating}</p>
                </ul>
            ))}
            
          
               
        </div>        
    )
}

export default Reviews;