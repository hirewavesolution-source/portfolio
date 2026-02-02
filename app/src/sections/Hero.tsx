import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Letter animation for name
  const nameLetters = "Akash K Madhu".split('');

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-bg-blue via-white to-brand-cyan/30"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-brand-yellow/40 rounded-full blur-xl animate-float-slow" />
        <div className="absolute top-[20%] right-[10%] w-48 h-48 bg-brand-pink/30 rounded-full blur-2xl animate-float-gentle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[15%] left-[15%] w-40 h-40 bg-brand-cyan/40 rounded-full blur-xl animate-float-medium" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[25%] right-[20%] w-24 h-24 bg-brand-light-blue/30 rounded-full blur-lg animate-float-slow" style={{ animationDelay: '3s' }} />
        
        {/* Abstract shapes image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[80%] opacity-60">
          <img
            src="/hero-shapes.png"
            alt=""
            className="w-full h-full object-contain animate-float-gentle"
          />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-[30%] left-[40%] w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] right-[30%] w-48 h-48 bg-brand-soft-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1230px] mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-2xl">
          {/* Location Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-card mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1.6s' }}
          >
            <MapPin className="w-4 h-4 text-brand-blue" />
            <span className="text-sm font-medium text-brand-dark-grey">Kochi, Kerala, India</span>
          </div>

          {/* Headline with letter animation */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-brand-black mb-4 leading-tight">
            {nameLetters.map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-600 ${
                  isVisible ? 'opacity-100 rotateX-0' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: `${0.4 + index * 0.04}s`,
                  animation: isVisible ? `flip-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + index * 0.04}s forwards` : 'none',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <Briefcase className="w-6 h-6 text-brand-blue" />
            <h2 className="font-display text-2xl md:text-3xl text-brand-blue font-medium">
              US Mortgage Professional
            </h2>
          </div>

          {/* Tagline with typewriter effect */}
          <p
            className={`text-lg md:text-xl text-brand-grey leading-relaxed mb-10 max-w-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            Specializing in{' '}
            <span className="text-brand-blue font-semibold">Closing Disclosure</span>{' '}
            preparation with precision, compliance, and expertise. An adaptive and quick learner with strong problem-solving skills.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1.4s' }}
          >
            <Button
              size="lg"
              className="bg-brand-blue hover:bg-brand-dark-blue text-white px-8 py-6 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-glow-lg group"
              onClick={() => scrollToSection('#experience')}
            >
              View My Experience
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-6 rounded-xl font-medium text-lg transition-all duration-300 hover:scale-105 group"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div
            className={`flex flex-wrap gap-8 mt-12 pt-8 border-t border-brand-silver transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1.8s' }}
          >
            <div className="text-center">
              <div className="font-display text-3xl font-semibold text-brand-blue">2+</div>
              <div className="text-sm text-brand-grey">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-semibold text-brand-blue">500+</div>
              <div className="text-sm text-brand-grey">Loans Processed</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-semibold text-brand-blue">100%</div>
              <div className="text-sm text-brand-grey">Compliance Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
