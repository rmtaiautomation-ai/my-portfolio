import { useEffect } from 'react';
import { Mail, Phone, Link } from 'lucide-react';


export default function Calendar() {
  useEffect(() => {
    // Add the Calendly script on mount
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-2">Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-text">Book a Discovery Call</h2>
          <p className="text-brand-text-muted max-w-2xl mx-auto">
            Ready to streamline your operations? Pick a time below and let's discuss how automation can scale your business.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto bg-brand-dark rounded-xl overflow-hidden shadow-2xl mb-12">
          {/* Calendly inline widget */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/rommeltima07/new-meeting" 
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-16 text-brand-text-muted">
          <a href="mailto:rommeltima07@gmail.com" className="flex items-center gap-3 hover:text-brand-cyan transition-colors">
            <div className="bg-brand-dark p-3 rounded-full border border-brand-border">
              <Mail className="text-brand-cyan" size={24} />
            </div>
            <span className="font-medium">rommeltima07@gmail.com</span>
          </a>
          
          <a href="tel:09770124038" className="flex items-center gap-3 hover:text-brand-cyan transition-colors">
            <div className="bg-brand-dark p-3 rounded-full border border-brand-border">
              <Phone className="text-brand-cyan" size={24} />
            </div>
            <span className="font-medium">09770124038</span>
          </a>

          <a href="https://www.linkedin.com/in/rommel-tima-1940561ab/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-cyan transition-colors">
            <div className="bg-brand-dark p-3 rounded-full border border-brand-border">
              <Link className="text-brand-cyan" size={24} />
            </div>
            <span className="font-medium">LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}
