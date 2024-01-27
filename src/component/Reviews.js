import React, { useEffect, useState } from "react"


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
        <div className="bg-zinc-900 px-80 py-16 ">
            <h1 className="font-bold text-7xl text-gray-200 py-20 text-center uppercase">Our Reviews</h1>
                <p className="font-bold text-5xl text-gray-200 py-20">Here are some of our Clients reviews about our work!</p>
            {review.map(reviews => ( 
                <div className="w-[800px] h-[300px] shadow-lg bg-gray-200 flex flex-wrap py-20  outline outline-2" key={reviews.id}>
                   
                    <p className="font-bold text-3xl text-right border-b-2 border-indigo-600 border-zinc-900">{reviews.name}</p>
                    <p className="text-lg italic">{reviews.reviews}</p>
                    <p className="text-lg">{reviews.rating}</p>
                   
                </div>
            ))}
        </div>        
    )
}

export default Reviews;