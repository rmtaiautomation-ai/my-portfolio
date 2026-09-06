import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-border/50 py-8 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-brand-text-muted">
          <p>© {new Date().getFullYear()} Rommel Tima. All rights reserved.</p>
          <p>Built with React · TypeScript · Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
