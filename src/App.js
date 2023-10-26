import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    toggleStyle()
    if (mode === 'black') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")

    } else {
      setMode('black');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")
    }
  }

  // About Page

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  })

  const [btnText, setBtnText] = useState("Enable Dark Mode")

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      })
      setBtnText("Enable Light Mode")
    }
    else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      })
      setBtnText("Enable Dark Mode")
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar title="TextGalaxy" mode={mode} toggleMode={toggleMode} alert={alert} />}>
          <Route index element={<TextForm heading="Enter your text to analyze below:" mode={mode} showAlert={showAlert} />} />
          <Route path='/about' element={<About myStyle={myStyle} toggleStyle={toggleStyle} btnText={btnText} />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>

        {/* <Navbar title="TextGalaxy" aboutText="About" /> */}
        {/* <> */}
        {/* <Navbar title="TextGalaxy" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3 ">
        <TextForm heading="Enter your text to analyze below:" mode={mode} showAlert={showAlert} />
        <About myStyle={myStyle} toggleStyle={toggleStyle} btnText={btnText} />
      </div> */}
        {/* </> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
