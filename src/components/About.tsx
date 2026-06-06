import profileImg from '../assets/profile.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center text-brand-blue tracking-widest uppercase mb-16 uppercase" style={{ fontFamily: 'monospace' }}>
          ABOUT ME
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Left Side: Image with Glow */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative">
              {/* Outer massive glow */}
              <div className="absolute inset-0 bg-brand-blue rounded-full blur-[100px] opacity-30 dark:opacity-50"></div>
              <img 
                src={profileImg} 
                alt="Profile" 
                className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full z-10 shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side: Text and Button */}
          <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left pt-8">
            <p className="text-brand-text-muted text-lg leading-relaxed mb-6">
              Hello! I'm an Automation & Lead Generation Specialist focused on architecting intelligent workflows that eliminate manual bottlenecks. Leveraging platforms like Make.com, n8n, and GoHighLevel, I transform complex, multi-step processes into seamless, scalable systems.
            </p>
            <p className="text-brand-text-muted text-lg leading-relaxed mb-10">
              I specialize in integrating Agentic AI and API structures to build robust outbound pipelines, from data enrichment to video prospecting. My goal is simple: engineer the automated engines that run quietly in the background so businesses can focus on growth.
            </p>
            
            <button 
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-blue hover:bg-blue-600 text-white font-bold px-10 py-4 rounded text-sm tracking-widest transition-colors shadow-lg shadow-brand-blue/20 uppercase"
            >
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
