import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Operations Manager, TechFlow',
    content: 'The automation systems built for us completely transformed how our sales team operates. We save over 20 hours a week on manual data entry and our lead response time dropped from hours to minutes.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GrowthMetrics',
    content: 'An absolute game-changer. The custom n8n workflows integrated seamlessly with our existing stack. The level of technical expertise and strategic thinking provided was exceptional.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop'
  },
  {
    name: 'Emma Williams',
    role: 'Marketing Director, Elevate Digital',
    content: 'Our content repurposing pipeline is now fully automated thanks to the Zapier and OpenAI integration. It\'s like having a full-time content team working 24/7. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative z-10 border-t border-brand-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-2">Client Feedback</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-text">Testimonials</h2>
          <p className="text-brand-text-muted max-w-2xl mx-auto">
            Don't just take my word for it. Here is what my clients have to say about the systems we've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-card border border-brand-border rounded-xl p-8 relative hover:border-brand-cyan/50 transition-colors group">
              <Quote className="absolute top-6 right-6 text-brand-border group-hover:text-brand-cyan/20 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-brand-cyan fill-brand-cyan" size={16} />
                ))}
              </div>
              
              <p className="text-brand-text-muted italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border border-brand-border"
                />
                <div>
                  <h4 className="text-brand-text font-bold">{testimonial.name}</h4>
                  <p className="text-brand-cyan text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
