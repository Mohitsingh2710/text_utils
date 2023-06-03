import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [theme,setTheme]=useState("white");

  const changeTheme=(colorcode)=>{
     setTheme(colorcode);
     document.body.style.background=colorcode;
  }

  return (

    <div className="App">
      {/* <BrowserRouter> */}
    <Navbar  title="TextUtils" theme={theme} changeTheme={changeTheme}/>
    <div className="container">
{/*    
        <Routes>
          <Route path='/' element={ <TextForm  heading="Enter the text to Analyze" theme={theme} />} />
          <Route path='/about' element={ <About />} />
        </Routes> */}
        
        <TextForm  heading="Enter the text to Analyze" theme={theme} />
        
    </div>
    {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
