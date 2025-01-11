import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Extensions from './components/Extensions';
import Faq from './components/FAQ';
import TopFooter from './components/Footer/TopFooter';

function App() {
  return (
    <div className='m-auto min-h-screen mt-2.5 justify-center mb-2'>
      <Header />
      <Hero />
      <Features />
      <Extensions/>
      <Faq />
      <TopFooter />
    </div>
  )
}

export default App;
