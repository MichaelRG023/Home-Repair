function ProfessionalServices(){








    return(
        <div className="bg-amber-600">
           <h3 className="font-bold text-6xl">Meet Your Home Service Experts</h3>
           <ul className="w-48 text-sm font-medium text-gray-900 bg-amber-600  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
             <li className=" w-xl  border-gray-200 rounded-t-lg dark:border-gray-600">
               <div className="flex items-center ps-3">
                   <input id="vue-checkbox" type="checkbox" value="" className="w-6 h-20 text-blue-600 bg-gray-100"></input>
                   <label for="vue-checkbox" className="font-bold text-xl">Emergency Repairs</label>
               </div>
            </li>
           <li className="w-lg  border-gray-200 rounded-t-lg dark:border-gray-600">
               <div className="flex items-center ps-3">
                    <input id="vue-checkbox" type="checkbox" value=""className="w-6 h-20 text-blue-600 bg-gray-100"></input>
                    <label for="vue-checkbox" className="font-bold text-xl"> Electrical Repair</label>
                </div> 
            </li>
           <li className="w-lg border-gray-200 rounded-t-lg dark:border-gray-600">
               <div className="flex items-center ps-3">
                    <input id="vue-checkbox" type="checkbox" value=""className="w-6 h-20 text-blue-600 bg-gray-100"></input>
                    <label for="vue-checkbox" className="font-bold text-xl">Circuit Breakers</label>
               </div> 
           </li>
           <li className="w-lg  border-gray-200 rounded-t-lg dark:border-gray-600">
               <div className="flex items-center ps-3">
                   <input id="vue-checkbox" type="checkbox" value=""className="w-6 h-20 text-blue-600 bg-gray-100"></input>
                   <label for="vue-checkbox" className="font-bold text-xl">Ceiling Fans</label>
             </div> 
           </li>
           <li className="w-lg  border-gray-200 rounded-t-lg dark:border-gray-600">
               <div className="flex items-center ps-3">
                    <input id="vue-checkbox" type="checkbox" value=""className="w-6 h-20 text-blue-600 bg-gray-100"></input>
                    <label for="vue-checkbox" className="font-bold text-xl"> Generators</label>
             </div> 
           </li>
        </ul>

        </div>
    )
}


export default ProfessionalServices;