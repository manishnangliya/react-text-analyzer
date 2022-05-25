import './App.css';
import Navbar from './Component/Navbar';
import TextBar from './Component/TextBar';
import React, { useState } from 'react';
import Alert from './Component/Alert';
import About from './Component/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert(
      {
        message: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black'
      showAlert("Converted into light mode", "success");
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#041f48";
      document.body.style.color = "white";
      showAlert("Converted into dark mode", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <TextBar heading="Enter text to analyze" mode={mode} showAlert={showAlert} />

      {/* for about page */}
      {/* <About/> */}
    </>
  );
}

export default App;
