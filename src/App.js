import React, { useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Play from './components/Play';
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [myChoice, setMyChoice] = useState('');
  const [score, setScore] = useState(0);


  return (
    <>
      <div className="container">
        <Header score={score} />
        <Routes>
          <Route exact path="/" element={<Play setMyChoice={setMyChoice} />} />
          <Route path="/game" element={<Game myChoice={myChoice} score={score} setScore={setScore} />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}


export default App;