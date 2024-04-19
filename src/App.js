import "./App.css";
import React, { useState } from "react";
import Secalert from "./component/Secalert.js";
import Textform from "./component/Textform.js";
import About from "./component/About.js";
import Navbar from "./component/Bar.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // const [mode,setMode]=useState('light');  

  // const toggleMode=()=>{
  //   if(mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor='grey';
  //     showalert('dark mode has been enabled',"success");
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor='white';
  //   }
  // }
 

  const [alert,setAlert]=useState(null);
  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
    return (
    <>
      <Router>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUitls" AboutText="About TextUitls" mode={mode} toggleMode={toggleMode} /> */}
      <Navbar title="TextUitls" AboutText="About TextUitls"/>
      <Secalert alert="{alert} "/>
      <div className="container my-3">
      <Routes>
      <Route exact path='/about' element={<About/>} />
          <Route exact path="/"
           element={ <Textform showalert={showalert} heading="TextUtils- Word Counter, Character Counter and much more"/>}/>
          
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
