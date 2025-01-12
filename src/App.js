import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/FeaturesFolder.js/Features';
import Extensions from './components/Extensions';
import Faq from './components/FAQ';
import TopFooter from './components/Footer/TopFooter';
import BottomFooter from './components/Footer/BottomFooter';

function App() {
  return (
    <div className='m-auto min-h-screen mt-2.5 justify-center'>
      <Header />
      <Hero />
      <Features />
      <Extensions/>
      <Faq />
      <TopFooter />
      <BottomFooter/>
    </div>
  )
}

export default App;
