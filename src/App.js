import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import TextForm from "./Components/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = (dataFromChild) => {
    console.log("Data received from child:", dataFromChild);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "Text Utils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Text Utils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Text Utils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<TextForm heading="Enter text to analyze below" />}
          />
          <Route exact path="/about" element={<AboutUs mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
