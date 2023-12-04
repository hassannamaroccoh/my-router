
import Signin from"./assets/Components/Signin";
import Signup from "./assets/Components/Signup";
//  import Dashbord from ".Components/Dashbord/Dashbord";
//  import Newpassword from "Components/Newpassword/Newpassword";
//  import Landing from "components/l Landing/Landing";
//  import Forgotpassword from "components/Forgot-password";
 


 import {BrowserRouter, Routes, Route, } from "react-router-dom";
 function App  ()  {
   return ( 
    <>
     <BrowserRouter>
       <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/Signup" element={<Signup/>}/>
        {/* <Route exact path="/" element={<Landing/>}/> */}
       {/* <Route exact path="/" element={<Dashbord/>}/> */}
       {/* <Route exact path="/" element={<Forgotpassword/>}/> */}
      {/* <Route exact path="/" element={<Newpassword/>}/> */}
    

    </Routes>
  </BrowserRouter>

    </>
   );
 }
 
 export default App;
