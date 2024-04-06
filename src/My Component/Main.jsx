import React from "react";
import { useState } from "react";

const Main = (props) => {
  const [text, setText] = useState("Please Enter Text");

  const handleonClicked = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Text Is Converted In Uppercase!", "Success");
  };

  const handleonClickedLow = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Text Is Converted In LowerCase!", "Success");
  };

  const handleOnClickedClear = () => {
    setText("");
    props.showAlert("Text Is Cleared!", "Success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnClickedCopy = () => {
    var text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Is Copy!", "Succes");
  };

  return (
    <div className="container">
      <textarea
        type="text"
        className={`form-control my-5 bg-${
          props.mode === "light" ? "light" : "dark"
        } text-${props.mode === "light" ? "black" : "light"}`}
        onChange={handleOnChange}
        value={text}
        id="box"
      />
      <button className="btn btn-primary m-1" onClick={handleonClicked}>
        Convert To Uppercase
      </button>
      <button className="btn btn-primary" onClick={handleonClickedLow}>
        Convert To LowerCase
      </button>
      <button className="btn btn-primary m-1" onClick={handleOnClickedClear}>
        Clear Text
      </button>
      <button className="btn btn-primary m-1" onClick={handleOnClickedCopy}>
        Copy Text
      </button>

      <div
        className={`section-Part text-${
          props.mode === "light" ? "black" : "light"
        }`}
      >
        <div>
          <h1>Text Summry</h1>
          <p>
            The Lenght of text {text.length} number of word in the text{" "}
            {text.split(" ").length}
          </p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
export default Main;
