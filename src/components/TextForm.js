import React, { useState } from 'react';


function TextForm(props) {
    const [text,setText]=useState("");

const handleUpclick=()=>{
   
    let str=text.toUpperCase();
    setText(str);
}

const handleLowclick=()=>{
   
    let str=text.toLowerCase();
    setText(str);
}

const handleClearclick=()=>{
   
  setText("");
}

const handleCopy=()=>{
    let txt=document.getElementById("exampleFormControlTextarea1");
    txt.select();
    navigator.clipboard.writeText(txt.value);
}

const handleOnchange=(e)=>{
   
  let newText=e.target.value;
 
    setText(newText); 
}

  return (
<div style={{background:`${props.theme}`}}>
    <div className="container" >
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnchange} placeholder='Enter Text Here..'></textarea>
        </div>

       <button className="btn btn-primary mx-3" onClick={handleUpclick} >Set To UpperCase</button>
       <button className="btn btn-primary mx-3" onClick={handleLowclick} >Set To LowerCase</button>
       <button className="btn btn-primary mx-3" onClick={handleClearclick} >Clear Text</button>
       <button className="btn btn-primary mx-3" onClick={handleCopy} >Copy Text</button>
    </div>

     <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>Number of Characters : {text.length}</p>
        <p>Number of Words : {text.length ? (text.split(" ").filter(item=>item!=="").length):0}</p>

     </div>

    </div>
  )
}

export default TextForm;