import React from "react";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Showcase from "./sections/Showcase";
import Workflow from "./sections/Workflow";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="bg-white">
      <Hero />
      <Services />
      <Showcase index={0} initialIndex={0} />
      <Showcase index={1} />
      <Workflow />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;