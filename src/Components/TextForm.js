import React,{useState} from 'react'

export default function TextForm(props) {
    const [text , setText]=useState("")

     
        const handleExtraSpaces = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert("Extra Spaces removed", "success")
            
        }
       
    const handleUpperCaseClick=()=>{
        let newText= text.toUpperCase()
        setText(newText)
       props.showAlert("converted to UpperCase", "success")
    }
    const handleclear=()=>{
        let newClear=""
        setText(newClear)
        props.showAlert(" Text Cleared", "success")
     }
    const handleLowerClick=()=>{
        let newText= text.toLowerCase()
        setText(newText)
        props.showAlert("converted to LowerCase", "success")
    }
    const handleonchange=(event)=>{
    setText(event.target.value)

    }
     
  return (
   <>
    
    <div>
     
<div className="container">
  <label  htmlFor=" textform" className="form-label">{props.heading}   </label>
  <textarea className="form-control" style={{backgroundColor: props.mode==="light" ? "grey" : "light"}} value={text} onChange={ handleonchange}  id="exampleFormControlTextarea1" rows="3"></textarea>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>Convert to UpperCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to LowerCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclear}>Clear Text </button>


 </div>
    </div>
    <div className="container my-3 ">

        <h2>
            Your Text Summery  </h2>
            <p>
                the words are {text.split(" ").filter((element)=>{return element.length!==0 }).length} and characters are {text.length}

            </p>
       <h3> { 0.008 * text.split("").length} Mins to read  </h3>
<h2>
    Preview
</h2>
<p> {text}</p>
        
    </div>
    </>
  )
}
