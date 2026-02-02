import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, Award, School, BookOpen } from 'lucide-react';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  icon: React.ElementType;
  color: string;
  highlight?: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    institution: 'St. Berchmans College',
    degree: 'Bachelor of Commerce (Finance and Taxation)',
    duration: '2020 - 2024',
    icon: GraduationCap,
    color: 'bg-brand-blue',
    highlight: 'Recent Graduate',
  },
  {
    id: 2,
    institution: 'ILC Academy',
    degree: 'CCTA (G-TEC Certificate)',
    duration: '2024',
    icon: Award,
    color: 'bg-brand-medium-blue',
    highlight: 'Certification',
  },
  {
    id: 3,
    institution: 'Tally',
    degree: 'Tally Certification',
    duration: '2023',
    icon: BookOpen,
    color: 'bg-brand-light-blue',
    highlight: 'Software',
  },
  {
    id: 4,
    institution: 'Mar Dionysius Higher Secondary School',
    degree: 'Commerce I/P',
    duration: '2018 - 2020',
    icon: School,
    color: 'bg-brand-soft-blue',
    highlight: 'Higher Secondary',
  },
];

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-24 bg-brand-bg-grey overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1230px] mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 mb-6 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-8 h-0.5 bg-brand-blue" />
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Education</span>
            <div className="w-8 h-0.5 bg-brand-blue" />
          </div>

          <h2
            className={`font-display text-4xl md:text-5xl text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Academic Background
          </h2>

          <p
            className={`text-lg text-brand-grey max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Building a strong foundation in finance, taxation, and mortgage operations
          </p>
        </div>

        {/* Education Cards - Stacked Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-silver hidden sm:block">
            <div
              className={`absolute top-0 left-0 w-full bg-brand-blue transition-all duration-1000 ${
                isVisible ? 'h-full' : 'h-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            />
          </div>

          {/* Cards */}
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center shadow-lg transition-transform duration-300 ${
                        hoveredCard === item.id ? 'scale-125' : ''
                      }`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={`${index % 2 === 0 ? 'md:pr-20' : 'md:col-start-2 md:pl-20'}`}>
                    <div
                      className={`group bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-brand-silver/20 ${
                        hoveredCard === item.id ? 'ring-2 ring-brand-blue/20 scale-[1.02]' : ''
                      }`}
                      onMouseEnter={() => setHoveredCard(item.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        transform: isVisible
                          ? `rotate(${index % 2 === 0 ? '-1' : '1'}deg)`
                          : 'rotate(0deg)',
                        transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      {/* Mobile Icon */}
                      <div className="md:hidden flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        {item.highlight && (
                          <span className="px-3 py-1 bg-brand-bg-blue text-brand-blue text-xs font-semibold rounded-full">
                            {item.highlight}
                          </span>
                        )}
                      </div>

                      {/* Desktop Highlight Badge */}
                      {item.highlight && (
                        <div className="hidden md:block mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-bg-blue text-brand-blue text-xs font-semibold rounded-full">
                            <Award className="w-3.5 h-3.5" />
                            {item.highlight}
                          </span>
                        </div>
                      )}

                      {/* Institution */}
                      <h3 className="font-display text-xl md:text-2xl text-brand-black mb-2 group-hover:text-brand-blue transition-colors">
                        {item.institution}
                      </h3>

                      {/* Degree */}
                      <p className="text-brand-dark-grey font-medium mb-3">
                        {item.degree}
                      </p>

                      {/* Duration */}
                      <div className="flex items-center gap-2 text-brand-grey">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{item.duration}</span>
                      </div>

                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl">
                        <div
                          className={`absolute -top-10 -right-10 w-20 h-20 ${item.color} opacity-10 rotate-45 transition-transform duration-500 group-hover:scale-150`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <p className="text-brand-grey inline-flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-brand-blue" />
            Continuously learning and upgrading skills in mortgage operations
          </p>
        </div>
      </div>
    </section>
  );
}
