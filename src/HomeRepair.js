import { useEffect, useState } from "react";


function HomeRepair(){
    const[repair,setRepair] = useState([]);

    useEffect(() => {
    fetch("http://localhost:3030/Repairs")
    .then(response=>response.json())
    .then(json => setRepair(json))
    .catch(error => console.log(error));
     }, [])
     

   console.log("repair:",repair)



    return(
        <div>
            <h1>Why Choose Our Company For Your Home Repairs?</h1>
            <p>We value our work based on these 4 prinicples that ensures that our clients will recieve the best home repair that we can offer.</p>
            {repair.map(repaired=> (
                <div key={repaired.id}>
                    <h2>{repaired.name}</h2>
                    <img src={repaired.image}/>
                    <p>{repaired.text}</p>
                </div>
            ))}
            
         
        </div>
    )
}

export default HomeRepair;