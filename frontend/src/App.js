import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FixedFooter from './components/FixedFooter';
import Contact from './components/Contact';


function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Contact/>
            <Footer />
            <FixedFooter />
        </div>
    );
}

export default App;
