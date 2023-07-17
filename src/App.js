import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState("");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert("");
    }, 1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-primary','bg-danger','bg-success','bg-warning','bg-dark','bg-light');
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (darkMode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    }
    else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <Router>
      <>
        <Navbar title="TextUtils" aboutText="About" mode={darkMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={darkMode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={darkMode} />}>
            </Route>
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;