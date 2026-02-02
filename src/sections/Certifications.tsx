import { useEffect, useRef, useState } from 'react';
import { Award, Calendar, CheckCircle2, ExternalLink, FileBadge } from 'lucide-react';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  description: string;
  skills: string[];
  color: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: 'CCTA (G-TEC Certificate)',
    issuer: 'ILC Academy',
    year: '2024',
    description: 'Comprehensive certification in computer applications and technology, enhancing technical proficiency for modern mortgage operations.',
    skills: ['Computer Applications', 'Data Management', 'Technical Operations'],
    color: 'from-brand-blue to-brand-medium-blue',
  },
  {
    id: 2,
    name: 'Tally Certification',
    issuer: 'Tally Solutions',
    year: '2023',
    description: 'Professional certification in Tally accounting software, demonstrating expertise in financial record-keeping and account management.',
    skills: ['Accounting', 'Financial Management', 'Bookkeeping'],
    color: 'from-brand-medium-blue to-brand-light-blue',
  },
];

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
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
      id="certifications"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl" />
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
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Certifications</span>
            <div className="w-8 h-0.5 bg-brand-blue" />
          </div>

          <h2
            className={`font-display text-4xl md:text-5xl text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Professional Certifications
          </h2>

          <p
            className={`text-lg text-brand-grey max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Validated expertise through industry-recognized certifications
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`relative perspective-1000 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.15}s` }}
              onMouseEnter={() => setFlippedCard(cert.id)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div
                className={`relative w-full transition-transform duration-700 preserve-3d ${
                  flippedCard === cert.id ? 'rotate-y-180' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCard === cert.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front of Card */}
                <div
                  className="relative bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-brand-silver/20 backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Gradient Header */}
                  <div className={`h-2 w-full bg-gradient-to-r ${cert.color} rounded-full mb-6`} />

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-bg-blue flex items-center justify-center mb-6">
                    <FileBadge className="w-8 h-8 text-brand-blue" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl text-brand-black mb-2">{cert.name}</h3>
                  <div className="flex items-center gap-2 text-brand-grey mb-4">
                    <Award className="w-4 h-4" />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-light-grey">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{cert.year}</span>
                  </div>

                  {/* Hover hint */}
                  <div className="absolute bottom-4 right-4 text-brand-light-grey">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-3xl p-8 text-white rotate-y-180 backface-hidden`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <h4 className="font-display text-xl mb-4">About this Certification</h4>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Key Skills
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-bg-blue rounded-full">
            <Award className="w-5 h-5 text-brand-blue" />
            <span className="text-brand-dark-grey font-medium">
              Committed to continuous professional development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
