import { useEffect, useRef, useState } from 'react';
import { Target, Sparkles, TrendingUp } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: TrendingUp, value: '2+', label: 'Years Experience' },
    { icon: Target, value: '500+', label: 'Loans Processed' },
    { icon: Sparkles, value: '100%', label: 'Compliance Rate' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-bg-blue/50 to-transparent pointer-events-none" />
      
      <div className="max-w-[1230px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="relative">
            {/* Section Label */}
            <div
              className={`inline-flex items-center gap-2 mb-6 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-8 h-0.5 bg-brand-blue" />
              <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Profile</span>
            </div>

            {/* Heading */}
            <h2
              className={`font-display text-4xl md:text-5xl text-brand-black mb-6 leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              US Mortgage Professional with a{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-blue">Keen Eye for Detail</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-yellow/50 -z-0" />
              </span>
            </h2>

            {/* Body Text */}
            <p
              className={`text-lg text-brand-grey leading-relaxed mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              Specializing in{' '}
              <span className="font-semibold text-brand-dark-grey">Closing Disclosure (CD) preparation</span>,
              I bring precision and expertise to every loan closing. An adaptive and quick learner with strong
              problem-solving skills and a solid understanding of the mortgage process.
            </p>

            {/* Pull Quote */}
            <div
              className={`relative pl-6 border-l-4 border-brand-blue transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              <p className="text-xl font-display text-brand-dark-grey italic">
                "Experienced in maintaining accuracy and effective communication, with prior exposure to mortgage collections."
              </p>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div
            className={`relative transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-yellow/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-cyan/30 rounded-full blur-2xl" />
            
            {/* Stats Card */}
            <div className="relative bg-white rounded-3xl shadow-card-hover p-8 border border-brand-silver/50">
              <h3 className="font-display text-2xl text-brand-black mb-8 text-center">Key Achievements</h3>
              
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-6 p-4 rounded-2xl bg-brand-bg-grey hover:bg-brand-bg-blue/30 transition-all duration-500 group ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                      <stat.icon className="w-7 h-7 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-display text-3xl font-semibold text-brand-blue">{stat.value}</div>
                      <div className="text-sm text-brand-grey">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
