import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm({
  heading = "Enter default text to analyze below",
  mode,
}) {
  const [textUtilStyle, setTextUtilStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const [text, setText] = useState("Enter random text here");
  if (mode === "dark" && textUtilStyle.color === "black") {
    setTextUtilStyle({
      backgroundColor: "black",
      color: "white",
    });
  } else if (mode === "light" && textUtilStyle.color === "white") {
    setTextUtilStyle({
      backgroundColor: "white",
      color: "black",
    });
  }

  return (
    <div>
      <div style={textUtilStyle} className="container mb-3 my-3">
        <h1 className="mb-3">{heading}</h1>
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button
          className="btn btn-primary my-3"
          onClick={() => setText(text.toUpperCase())}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={() => setText(text.toLowerCase())}
        >
          Convert to Lowercase
        </button>

        <div>
          Your text summary: {text.split(" ").length} words and {text.length}{" "}
          characters
        </div>
        <div>
          Preview:{" "}
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </div>
      </div>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
