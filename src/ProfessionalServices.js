import React from "react";



function ProfessionalServices(){
   
    

    return(
        
        <div className="bg-gray-300">
           <h3 className="font-bold text-6xl">Meet Your Home Service Experts</h3>
             <img className="max-w-full ms-auto absolute right-0 h-5/6 flex flex-row" src="https://le-cdn.hibuwebsites.com/64b7818a0493479cbd6724b436d6f79f/dms3rep/multi/opt/694903-1152w.jpg" alt="wrench being held" />          
           <ul className="w-6/12 text-sm font-medium text-gray-900 bg-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:text-white ">
             <li className="border-gray-200 rounded-t-lg dark:border-gray-600">
               <div className="flex items-center ps-3">
                   <input id="vue-checkbox" type="checkbox" value="" className="w-11 h-40  text-blue-600 bg-gray-100"></input>
                   <label for="vue-checkbox" className="font-bold text-xl">Emergency Repairs</label>
               </div>
            </li>
           <li className="w-lg  border-gray-200 rounded-t-lg dark:border-gray-600">
               <div className="flex items-center ps-3">
                    <input id="vue-checkbox" type="checkbox" value=""className="w-9 h-40 text-blue-600 bg-gray-100"></input>
                    <label for="vue-checkbox" className="font-bold text-xl"> Electrical Repair</label>
                </div> 
            </li>
           <li className="w-lg border-gray-200 rounded-t-lg dark:border-gray-600">
               <div className="flex items-center ps-3">
                    <input id="vue-checkbox" type="checkbox" value=""className="w-9 h-40 text-blue-600 bg-gray-100"></input>
                    <label for="vue-checkbox" className="font-bold text-xl">Circuit Breakers</label>
               </div> 
           </li>
           <li className="w-lg  border-gray-200 rounded-t-lg dark:border-gray-600">
               <div className="flex items-center ps-3">
                   <input id="vue-checkbox" type="checkbox" value=""className="w-9 h-40 text-blue-600 bg-gray-100"></input>
                   <label for="vue-checkbox" className="font-bold text-xl">Ceiling Fans</label>
             </div> 
           </li>
           <li className="w-lg  border-gray-200 rounded-t-lg dark:border-gray-600">
               <div className="flex items-center ps-3">
                    <input id="vue-checkbox" type="checkbox" value=""className="w-9 h-40 text-blue-600 bg-gray-100"></input>
                    <label for="vue-checkbox" className="font-bold text-xl"> Generators</label>
             </div> 
           </li>
        </ul>
        <button className=" h-12 w-44 outline outline-2 text-lg ">Contact Us</button>
    </div>
    )
}


export default ProfessionalServices;