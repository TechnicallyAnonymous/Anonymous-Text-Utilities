import React, { useState } from 'react'
import '../components/TextForm.css'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLowClick = () => {
        // console.log("LowerCase was clicked")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleSpacesClick = () => {
        let newText = text.replace(/\s{2,}/g, ' ');
        setText(newText);
        props.showAlert("Extra Spaces Removed", "success")
    }
    const handleEmailClick = () => {
        let textArr = text.split(" ")

        for (let index = 0; index < textArr.length; index++) {
            const element = textArr[index];
            if (element.indexOf("@gmail.com") === -1) {
                props.showAlert("No Email Id Found(Make you lowercased the text)", "danger")
                
            }
            else {
                let newText = element.slice(0, element.indexOf("@gmail.com") + 10);
                setText(newText);
                props.showAlert("1 Email Found", "success")
                break;
            }
            
        }
    }

    const handleCopyClick = () => {
        // Get the text field
        var copyText = document.getElementById("myTextBox");
        
        // Select the text field
        copyText.select();
        // copyText.setSelectionRange(0, 99999); // For mobile devices
        
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        
        // Alert the copied text
        // alert("Copied the text: " + copyText.value);
        props.showAlert("Copied to Clipboard!", "success")
    }
    
    const handleStClick = () => {
        let newText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos culpa temporibus itaque nobis assumenda perferendis ipsum nostrum tenetur libero dolore eveniet sunt, quaerat corrupti. Voluptatum incidunt dignissimos perspiciatis adipisci ab laudantium earum dolorem veritatis ratione. Inventore quos sint cupiditate odio temporibus quaerat quis, adipisci aspernatur dolorum, architecto ipsum provident, assumenda dolor sed optio nam nesciunt iste quibusdam nostrum. Atque repellendus, vero aliquid, quae id quam optio sint magni explicabo eaque voluptatem consequatur adipisci veritatis officiis maiores rerum eos nobis dolor. Voluptate, dolore. Odit vero recusandae aspernatur distinctio ducimus suscipit fuga similique, mollitia, praesentium, rem cum laborum reprehenderit? Ratione fuga iste a maiores eos, optio saepe eligendi. Tenetur officiis nulla mollitia deleniti example@gmail.com illo architecto nihil amet ipsa recusandae perferendis excepturi libero vero distinctio nobis omnis tempore numquam iusto dignissimos. Officiis dolores recusandae odio. Fugit accusamus voluptas magni nobis perspiciatis eveniet adipisci, sunt sequi qui nulla aperiam! Tenetur harum deserunt culpa.";
        setText(newText);
        props.showAlert("Sample text has been placed", "success")
    }
    
    const handleCtClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success")
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state
    // setText = "new text"; // correct way to change the state
    
    return (
        <>
            <div className={`text-${props.mode==='black'?'light':'dark'}`}>
                <div className='container'>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className={`form-control bg-${props.mode==='black'?'dark':'light'} text-${props.mode==='black'?'light':'dark'} placeholder-${props.mode==='black'?'light':'dark'}`} placeholder='Enter Text Here' value={text} onChange={handleOnChange} id="myTextBox" rows="8"></textarea>
                    </div>
                    <button className={`btn btn-${props.mode==='black'?'outline-light': 'primary'} my-2`} onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className={`btn btn-${props.mode==='black'?'outline-light': 'primary'} my-2 mx-3`} onClick={handleLowClick}>Convert to LowerCase</button>
                    <button className={`btn btn-${props.mode==='black'?'outline-light': 'primary'} my-2`} onClick={handleSpacesClick}>Remove Extra Spaces</button>
                    <button className={`btn btn-${props.mode==='black'?'outline-light': 'primary'} my-2 mx-3`} onClick={handleEmailClick}>Find Email Id</button>
                    <button className={`btn btn-${props.mode==='black'?'outline-light': 'primary'} my-2`} onClick={handleCopyClick}>Copy to Clipboard</button>
                    <button className={`btn btn-${props.mode==='black'?'outline-light': 'primary'} my-2 mx-3`} onClick={handleStClick}>Sample Text</button>
                    <button className={`btn btn-${props.mode==='black'?'outline-light': 'primary'} my-2`} onClick={handleCtClick}>Clear Text</button>
                </div>
                <div className="container my-3" style={{ wordWrap: "break-word" }}>
                    <h1>Your Text Summary</h1>
                    <p>{text.length === 0 ? 0 : text.split(" ").slice(-1)[0] === "" ? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} characters</p>
                    <p>Average time to read is {(0.15 * text.length).toFixed(2)} seconds</p>

                    <h3>Text Preview</h3>
                    <p>{text.length === 0 ? "Enter the text above to preview" : text}</p>
                </div>
            </div>
        </>
    )
}
