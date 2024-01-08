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
        <div className="bg-amber-500 py-10 m-auto flex  align-middle flex-wrap gap-11">
            <br></br>
            <br></br>
            <h1 className="font-bold text-3xl">Why Choose Our Company For Your Home Repairs?</h1>
            <p className="text-xl">We value our work based on these 4 prinicples that ensures that our clients will recieve the best home repair that we can offer.</p>
            {repair.map(repaired=> (
                <div key={repaired.id} className="card border p-3 w-[330px] shadow-lg flex-row">
                    <img src={repaired.image} alt="nice"/>
                    <h2 className="font-bold text-2xl">{repaired.name}</h2>
                    <p className="text-xl">{repaired.text}</p>
                   
                </div>
            ))}
            
         
        </div>
    )
}

export default HomeRepair;