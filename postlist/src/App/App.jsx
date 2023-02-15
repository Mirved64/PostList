import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Components/Header/header';
import Main from '../Components/Main/main';
import Footer from '../Components/Footer/footer';
import api from '../utils/Api';

function App() {
  

  return (
    <div>
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
