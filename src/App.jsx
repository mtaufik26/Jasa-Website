import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './sections/Hero';
import Showcase from './sections/Showcase';
import Services from './sections/Services';
import WorkFlow from './sections/Workflow';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Hero />
      <Showcase index={0} />
      <Services />
      <Showcase index={1} />
      <WorkFlow />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
