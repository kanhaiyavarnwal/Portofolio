import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import LLMSection from './components/LLMSection';
import DSA from './components/DSA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      <ToastContainer/>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <LLMSection />
        <DSA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
