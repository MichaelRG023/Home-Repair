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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Why Choose Our Company For Your Home Repairs?</h1>
            <p>We value our work based on these 4 prinicples that ensures that our clients will recieve the best home repair that we can offer.</p>
            {repair.map(repaired=> (
                <div className="grid grid-cols-2 " key={repaired.id}>
                    <img src={repaired.image} alt="nice" className="rounded-full w-44 h-44"/>
                    <h2 className="font-bold h-12">{repaired.name}</h2>
                    <p className="">{repaired.text}</p>
                </div>
            ))}
            
         
        </div>
    )
}

export default HomeRepair;