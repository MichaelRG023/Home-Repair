import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Contact from "./component/Contact";
import HomeRepair from "./component/HomeRepair";
import Services from "./component/Services";
import NavBar from "./component/NavBar";
import ProfessionalServices from "./component/ProfessionalServices";


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