import React, { useEffect, useState } from "react"
import {AiFillStar, aiFillStar} from 'react-icons/ai'

function Reviews(){
const [review,setReview] = useState([]);




useEffect(()=>{
    fetch("http://localhost:3030/Comments")
    .then(response => response.json())
    .then(json => setReview(json))
    .catch(error => console.log(error));
},[])
console.log("review:",review[2])


// spread operator  === "..."



    return(
        <div className="bg-zinc-900 py-10 flex-wrap flex gap-x-10">
            <h1 className="font-bold text-5xl h-20 text-gray-200">Our Reviews</h1>
            <p>Here are our feedback from our happy customers</p>
            {review.map(reviews => ( 
                <div className="w-[340px] shadow-lg bg-gray-200" key={reviews.id}>
                    <h2 className="font-bold text-2xl text-center">{reviews.name}</h2>
                    <p className="text-lg italic ">{reviews.reviews}</p>
                    <p>{reviews.rating}</p>
                    <AiFillStar
                    className="star"
                    color="#ffc107"
                    />
                </div>
            ))}
          
               
        </div>        
    )
}

export default Reviews;