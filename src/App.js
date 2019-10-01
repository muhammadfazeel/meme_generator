import React from 'react';
import './App.css';
import NavBar from './components/header';
import MemeGenerator from "./components/meme-generator";

function App() {
  return (
    <div>
      <NavBar />
      <MemeGenerator />
    </div>
  );
}

export default App;
