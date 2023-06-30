import React, {useState} from 'react'


export default function Textf(props) {

  const handleUpClick=()=>{                           //uppercase
   // console.log("Uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
   props.showAlert("converted to uppercase","success")
  }

  const handleLoClick=()=>{                          //lowercase
    let Textt=text.toLowerCase();
    setText(Textt);
   props.showAlert("converted to lowercase","success")
  }

  const handleclear=()=>{                            //clear
    let text='';
    setText(text);
    props.showAlert("cleared text","success");
  }

  const handlecopy=()=>{
    let text=document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraspaces= () => {
    let newText=text.split(/[ ]+/);  //rajax
    setText(newText.join(" "));                                
  }

  const handleonChange=(event)=>{
    //console.log("On change");
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  //text="new Text"; //wrong way to change the state
  //setText=("new Text"); //correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      
  <div className="mb-3" width="500px">
   
    <textarea className="form-control"/*on change: textarea me likhneke liye. */ value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} onChange={handleonChange} id="Mybox"  rows="8"  placeholder="Enter Text"/>
  </div>
 <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
 <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
 <button className="btn btn-primary mx-1" onClick={handleclear}>Clear Text</button>
 <button className="btn btn-primary mx-1" onclick={handlecopy}>Copy Text</button>
 <button className="btn btn-primary mx-1" onclick={handleExtraspaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#1f2c3a'}}>
      <h1>Word counter</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes read.</p> 
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter a something in the textbox above to preview here"}</p>
    </div>
    </>
  )
}
