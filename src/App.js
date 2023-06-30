
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textf from './components/Textf';

import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
}from "react-router-dom";

//import Textf from './components/Textf';

function App() {
  const[mode,setmode] = useState('light');

  const[alert,setAlert]=useState(null);


  const showAlert=(message,type)=>{
   setAlert({
   msg:message,      //object ban jayega
   type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const togglemode= () => {
      if(mode==='light')
      {
        setmode('dark')
        document.body.style.backgroundColor='#1f2c3a';
        showAlert("Dark Mode has been enabled","success")
        document.title="TextUtils - DarkMode";
      }

      else{
        setmode('light')
        document.body.style.backgroundColor='white';
        showAlert("Light Mode has been enabled","success");
       document.title="TextUtils - LightMode";
      }
  }


  return (
    <>  
    <Router>
    <div>
   {/* <Navbar title="textUtils2" aboutText="AboutText"/> */}
    <Navbar title="Textutils" mode={mode} togglemode={togglemode}/>
  {/* <Navbar/> */}
  <Alert alert={alert}/>                                           
  <div className="container my-3">
                                    {/* switch used */}

     <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/" element={<Textf showAlert={showAlert} heading="Enter the text to analyze below." mode={mode}/>}></Route>
      </Routes>

    {/* <About/> */}
  </div>

  </div>
  </Router>
    </>
  );
}

export default App;

{/* <router>   router syntax
  <routes>
    <route>

    </route>
  </routes>
</router>

<Link exact to=/about></Link>   Link syntax exact nahi use karte to react partial matching karta hai.
*/}
