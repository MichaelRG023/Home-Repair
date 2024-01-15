import Home from "./Home";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Contact from "./Contact";
import HomeRepair from "./HomeRepair";
import Services from "./Services";
import NavBar from "./NavBar";
import ProfessionalServices from "./ProfessionalServices";


function App(){



  return(
    <>
   
      <Router> 
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}
          />
          <Route path="/contact" element={<Contact/>}
          /> 
        </Routes>
       
      </Router> 
      <HomeRepair/>
      <Services/>
      <ProfessionalServices/>
     
    </>
    
  )
}


export default App;