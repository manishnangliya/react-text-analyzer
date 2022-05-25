import React, { useState } from 'react'

export default function TextBar(props) {
    const [text, setText] = useState("Enter Your Text");
    
    const convertToUpper = () => {
        setText(text.toUpperCase());
    }
    const convertToLower = () => {
        setText(text.toLowerCase());
    }
    const clearText = () => {
        setText("");
        props.showAlert("Text Cleared","success");
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied","success");
    }
    const textChange = (event) => {
        setText("");
        setText(event.target.value)

    }
    const wordLen = (sentence) =>{
        let wordArr = sentence.split(" ");
        let len = wordArr.length;
        if(wordArr[len-1]===""|| wordArr[len-1]===" ")
            return len-1;
        return len;
    }
    return (
        <>
            <div className="container"  >
                <h1>{props.heading}</h1>
                <textarea className="form-control " id="myText" value={text} onChange={textChange} rows="4"></textarea>
                <button className="btn btn-primary mx-1 my-2" onClick={convertToUpper}>Convert to upper</button>
                <button className="btn btn-primary mx-1" onClick={convertToLower}>Convert to Lower</button>
                <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>

            </div>
            <div className="container my-2"   >
                <h2>Your Text Summary</h2>
                <h4>{wordLen(text)} words and {text.length} characters</h4>
                <h4>Preview Text</h4>
                <p>{text}</p>
            </div>

        </>
    )
}
