import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Extensions from './components/Extensions';
import Faq from './components/FAQ';

function App() {
  return (
    <div className='m-auto min-h-screen mt-2.5 justify-center mb-2'>
      <Header />
      <Hero />
      <Features />
      <Extensions/>
      <Faq />
    </div>
  )
}

export default App;
