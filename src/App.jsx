// import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"

import "./styles/App.scss";
import "./styles/header.scss";
// import "./styles/home.scss";



function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
