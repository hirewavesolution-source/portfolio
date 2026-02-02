import { useEffect, useRef, useState } from 'react';
import { 
  Monitor, 
  Calculator, 
  FileCheck, 
  Database, 
  Search, 
  Landmark,
  Eye,
  Clock,
  Brain,
  MessageSquare,
  Lightbulb,
  RefreshCw,
  Heart,
  Users,
  Shield,
  Handshake,
  Scale,
  Globe
} from 'lucide-react';

interface Skill {
  name: string;
  description: string;
  icon: React.ElementType;
}

interface Language {
  name: string;
  level: string;
  proficiency: number;
}

const softwareSkills: Skill[] = [
  {
    name: 'RamQuest',
    description: 'CD Prep and title processes',
    icon: FileCheck,
  },
  {
    name: 'ICE',
    description: 'Recording fee calculations',
    icon: Calculator,
  },
  {
    name: 'American Title',
    description: 'California state fees and title work',
    icon: Landmark,
  },
  {
    name: 'FICS',
    description: 'Mortgage collections tracking',
    icon: Database,
  },
  {
    name: 'MSP',
    description: 'Borrower account management',
    icon: Monitor,
  },
  {
    name: 'Property Tax Search',
    description: 'Verifying and calculating property taxes',
    icon: Search,
  },
];

const softSkills: Skill[] = [
  { name: 'Attention to Detail', description: 'Meticulous accuracy in all tasks', icon: Eye },
  { name: 'Time Management', description: 'Efficient prioritization and organization', icon: Clock },
  { name: 'Problem-Solving', description: 'Analytical approach to challenges', icon: Brain },
  { name: 'Communication', description: 'Clear and effective interaction', icon: MessageSquare },
  { name: 'Analytical Thinking', description: 'Data-driven decision making', icon: Lightbulb },
  { name: 'Adaptability', description: 'Quick learning and flexibility', icon: RefreshCw },
  { name: 'Customer Focus', description: 'Client-centered approach', icon: Heart },
  { name: 'Teamwork', description: 'Collaborative spirit', icon: Users },
  { name: 'Accountability', description: 'Reliable and responsible', icon: Shield },
  { name: 'Conflict Resolution', description: 'Effective dispute handling', icon: Scale },
];

const languages: Language[] = [
  { name: 'Malayalam', level: 'Native', proficiency: 100 },
  { name: 'English', level: 'Professional', proficiency: 90 },
  { name: 'Hindi', level: 'Conversational', proficiency: 70 },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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
      id="skills"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl" />
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
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Skills</span>
            <div className="w-8 h-0.5 bg-brand-blue" />
          </div>

          <h2
            className={`font-display text-4xl md:text-5xl text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Skills & Expertise
          </h2>

          <p
            className={`text-lg text-brand-grey max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            A comprehensive toolkit of technical proficiencies and interpersonal abilities
          </p>
        </div>

        {/* Software Skills */}
        <div className="mb-20">
          <h3
            className={`font-display text-2xl text-brand-black mb-8 flex items-center gap-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            Software Proficiency
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative bg-brand-bg-grey rounded-2xl p-6 hover:bg-white hover:shadow-card-hover transition-all duration-500 border border-transparent hover:border-brand-silver/30 ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${0.4 + index * 0.08}s` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                    <skill.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-brand-black mb-1 group-hover:text-brand-blue transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-brand-grey">{skill.description}</p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-brand-blue/5 transition-opacity duration-300 -z-10 ${
                    hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-20">
          <h3
            className={`font-display text-2xl text-brand-black mb-8 flex items-center gap-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className="w-10 h-10 rounded-xl bg-brand-medium-blue flex items-center justify-center">
              <Handshake className="w-5 h-5 text-white" />
            </div>
            Soft Skills
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group flex flex-col items-center text-center p-5 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 border border-brand-silver/20 hover:border-brand-blue/30 ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${0.7 + index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-brand-bg-blue flex items-center justify-center mb-3 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                  <skill.icon className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-medium text-brand-black text-sm mb-1">{skill.name}</h4>
                <p className="text-xs text-brand-grey">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3
            className={`font-display text-2xl text-brand-black mb-8 flex items-center gap-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.9s' }}
          >
            <div className="w-10 h-10 rounded-xl bg-brand-light-blue flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            Languages
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div
                key={language.name}
                className={`bg-white rounded-2xl p-6 shadow-card border border-brand-silver/20 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${1 + index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display text-xl text-brand-black">{language.name}</h4>
                  <span className="px-3 py-1 bg-brand-bg-blue text-brand-blue text-sm font-medium rounded-full">
                    {language.level}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="relative h-3 bg-brand-silver/30 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-blue to-brand-light-blue rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${language.proficiency}%` : '0%',
                      transitionDelay: `${1.2 + index * 0.1}s`,
                    }}
                  />
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-brand-light-grey">Proficiency</span>
                  <span className="text-sm font-semibold text-brand-blue">{language.proficiency}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
