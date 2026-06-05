import { useEffect } from 'react';
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

        <div className="w-full max-w-4xl mx-auto bg-brand-dark rounded-xl overflow-hidden shadow-2xl">
          {/* Calendly inline widget */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/rommeltima07/new-meeting" 
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </div>
    </section>
  );
}
