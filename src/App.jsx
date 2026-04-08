import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Showcase from "./sections/Showcase";
import Workflow from "./sections/Workflow";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import DetailPage from "./pages/page";
import ProjectDetail from "./pages/ProjectDetail";

function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
      <Showcase index={0} initialIndex={0} />
      <Showcase index={1} />
      <Workflow />
      <FAQ />
      <Footer />
    </>
  );
}

function App() {
  return (
    <main className="bg-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/detail/:slug" element={<ProjectDetail />} />
      </Routes>
    </main>
  );
}

export default App;