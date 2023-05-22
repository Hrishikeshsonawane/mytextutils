import React,{useState} from 'react'
 
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const  App=()=> {
 const [Mode, setMode] = useState("light");
 const [alert, setAlert] = useState(null);

 
 
 



  const showAlert = (message, type) => {
   setAlert({
       msg: message,
       Type: type
   })
   setTimeout(() => {
     setAlert(null)
   }, 1500);
}
 const toggleMode=()=>{
   if (Mode === "dark"){
    
     setMode("light")
     document.body.style.backgroundColor="white"
     showAlert("light mode has been enabled",  "success"  )
     document.title="TextUtils-Light Mode"
      
   }else{
     setMode("dark")
     document.body.style.backgroundColor="grey"
     showAlert("dark mode has been enabled", "success"  )
     document.title="TextUtils-Dark Mode"
   }
 }
 return ( 

   <>    
   

<Alert alert={alert}/>
    <div className="container">
   
    {/* <Router> */}
    <Navbar title= "Ashu" mode={Mode} toggleMode={toggleMode}/>

{/* <Routes> */}
 {/* <Route path="/about" element={<About />} /> */}
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode} /> 
{/* </Routes>
</Router>
       */}
      {/* <About />
           <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>
   */}
 
 
    
    
   
   </div>
  
    </>
 );
}

export default App;
