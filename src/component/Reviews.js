import React, { useEffect, useState } from "react"
import {AiFillStar} from 'react-icons/ai'
import {Rating} from "@mui/material";

function Reviews(){
const [review,setReview] = useState([]);





useEffect(()=>{
    fetch("http://localhost:3030/Comments")
    .then(response => response.json())
    .then(json => setReview(json))
    .catch(error => console.log(error));
},[])


const updateRating = (commentId, newRating) => {
    setReview(prevComments => prevComments.map(comment =>{
        if(review.id === review.id){
            return {...review, rating: newRating}
        }
        return comment;
    }))
}

// spread operator  === "..."


 // ffc107 is going to be yellow color 


    return(
        <div className="bg-zinc-900 px-80 text-center">
            <h1 className="font-bold text-7xl text-gray-200 py-20">Our Reviews</h1>
                <p className="font-bold text-4xl text-gray-200 py-20">Here are some of our Clients reviews about our work!</p>
            {review.map(reviews => ( 
                <div className="w-[500px] shadow-lg bg-gray-200 flex flex-wrap py-14  gap-x-12 outline outline-2" key={reviews.id}>
                    <h2 className="font-bold text-2xl text-center border-b-2 border-zinc-900">{reviews.name}</h2>
                    <p className="text-lg italic">{reviews.reviews}</p>
                    <p className="text-lg">{reviews.rating}</p>
                   
                </div>
            ))}
        </div>        
    )
}

export default Reviews;