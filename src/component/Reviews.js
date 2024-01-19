import React, { useState } from "react"
import { FaStar } from "react-icons/fa";

function Reviews(){
const [review,setReview] = useState("");
const [rating, setRating] = useState(null);
const [hover, setHover] = useState(null);









    return(
        <div>
            <form id="form">
            <input type="text"/>
            </form>
            {[...Array(5)].map((star,index) => {
                const currentRating = index + 1;
                return(
                    <label className="">
                        <input
                        className="hidden"
                        type="radio"
                        name="rating"
                        value={currentRating}
                        onClick={()=> setRating (currentRating)}
                        />
                        <FaStar 
                         className="cursor-pointer" 
                         size={20}
                         color={currentRating <= (hover || rating)? "#ffc107" : "#e4e5e9"}
                         onMouseEnter={() => setHover(currentRating)}
                         onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}
        </div>        
    )
}

export default Reviews;