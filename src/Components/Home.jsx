import React from 'react';
import Header, { Hero } from './Header';
import About from './About';
import Projects from './Projects';
import Certifications from './Certifications';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
