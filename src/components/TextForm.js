import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was clicked');
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case!", "success");
    }
    
    const handleLoClick = () => {
        // console.log('Lowercase was clicked');
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case!", "success");
    }
    
    const handleOnChange = (event) => {
        // console.log('onChange clicked');
        setText(event.target.value);
    }
    
    const handleClearClick = () => {
        setText('');
        props.showAlert("Cleared all text!", "success");
    }
    
    const handleCapClick = () => {
        const lower = text.toLowerCase();
        setText(lower);
        const arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let str = arr.join(' ');
        setText(str);
        props.showAlert("Capitalized the text!", "success");
    }
    
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard!", "success");
    }

    const handleExtraSpacesClick = () => {
        let str = text.split(/[ ]+/);
        setText(str.join(" "));
        props.showAlert("All Extra spaces cleared!", "success");
    }
    
    const [text, setText] = useState("");
    // text = "New Text";  // Wrong way to change the state
    // setText("New Text"); // Correct way to change the state
    
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="example" rows="8" value={text} onChange={handleOnChange} style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary me-3 mt-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-success me-3 mt-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-secondary me-3 mt-2" onClick={handleCapClick}>Capitalized Text</button>
                <button disabled={text.length===0} className="btn btn-warning me-3 mt-2" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-dark me-3 mt-2" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-danger me-3 mt-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text sumary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters and {text.length === 0 ? '0' : (text.split('\n').length)} Lines</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes to read.</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Enter something in the textbox to previwe it here.'}</p>
            </div>
        </>
    )
}