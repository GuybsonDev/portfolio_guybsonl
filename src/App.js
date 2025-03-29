import { useState } from "react";
import "./styles.css";
import NavBar from '../src/components/navbar'
import Home from '../src/pages/home'
import About from '../src/pages/about'
import Projects from "./pages/projects";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
