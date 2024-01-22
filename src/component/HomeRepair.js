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
        <div className="bg-zinc-900 py-10 flex-wrap flex gap-x-10 ">
            <h1 className="font-bold text-6xl h-20 text-gray-200">Why Choose Our Company For Your Home Repairs?</h1>
            <p className="text-3xl h-32 text-gray-200">We value our work based on these 4 prinicples that ensures that our clients will recieve the best home repair that we can offer.</p>
            {repair.map(repaired => (
                <div key={repaired.id} className=" w-[300px] shadow-lg bg-gray-200">
                    <img src={repaired.image} alt="nice"/>
                    <h2 className="font-bold text-2xl text-center ">{repaired.name}</h2>
                    <p className="text-xl italic">{repaired.text}</p>
                    <br></br>
             </div>
            ))}
     </div>
    )
}

export default HomeRepair;