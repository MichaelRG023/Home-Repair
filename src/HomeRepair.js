import { useEffect, useState } from "react";

function HomeRepair(){
    const[repairs,setRepairs] = useState([])

    useEffect(()=> {
    fetch("http://localhost:3030/Repairs")
    .then(response=>response.json())
    .then(data=>setRepairs(data))
     },[])

    



    return(
        <div>
            {repairs.map((repaired)=>(
                <div key={repaired.id}>
                    <li></li>
                    <li></li>
                    <li></li>
                 
                </div>  
                 ))}
        </div>
    )
}

export default HomeRepair;