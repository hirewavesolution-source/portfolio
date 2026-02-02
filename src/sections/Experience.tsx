import { useEffect, useRef, useState } from 'react';
import { Building2, Calendar, CheckCircle2, Briefcase, Phone, FileText } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  icon: React.ElementType;
  color: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'US Mortgage Closing Processor',
    company: 'PrivoCorp',
    location: 'World Trade Centre, Infopark, Kochi, India',
    duration: 'December 2, 2024 - December 31, 2025',
    description: 'Prepared and analyzed Closing Disclosures (CDs), ensuring consistency between lender and title figures.',
    responsibilities: [
      'Verified and calculated payoffs, property taxes, and recording fees for accuracy prior to loan closing',
      'Ensured TRID compliance and adherence to regulatory and company guidelines',
      'Coordinated with title/escrow teams to resolve discrepancies and clear curative and vesting issues',
      'Handled tax and judgment calling to verify outstanding amounts and facilitate accurate closings',
      'Maintained audit-ready loan files, tracking CD revisions and closing timelines',
    ],
    skills: [
      'CD Prep',
      'Pre-Closing Operations',
      'TRID Compliance',
      'Lender vs Title CD Reconciliation',
      'Payoff & Fee Verification',
      'Curative & Vesting Issue Resolution',
      'Coordination with Title/Escrow',
      'Tax & Judgment Calling',
      'Audit-Ready Loan Closings',
    ],
    icon: FileText,
    color: 'bg-brand-blue',
  },
  {
    id: 2,
    title: 'US Mortgage Collection Processor',
    company: 'PrivoCorp',
    location: 'World Trade Centre, Infopark, Kochi, India',
    duration: 'December 2, 2024 - December 31, 2025',
    description: 'Handled inbound and outbound calls from borrowers to discuss repayment options and resolve delinquencies.',
    responsibilities: [
      'Negotiated payment arrangements and resolved delinquencies, preventing foreclosure wherever possible',
      'Utilized MSP (Mortgage Servicing Platform) and other collection tools to document borrower interactions',
      'Tracked payments, updated account information, and ensured data accuracy',
      'Performed skip tracing to locate borrowers with outstanding debts',
      'Analyzed financial statements and credit reports to assess repayment capacity',
    ],
    skills: [
      'Cashiering',
      'Mortgage Collections',
      'Customer Support',
      'MSP (Mortgage Servicing Platform)',
      'Account Reconciliation',
      'Compliance',
      'Communication',
      'Problem Solving',
    ],
    icon: Phone,
    color: 'bg-brand-medium-blue',
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeJob, setActiveJob] = useState(0);
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
      id="experience"
      className="relative py-24 bg-brand-bg-grey overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl" />
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
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Experience</span>
            <div className="w-8 h-0.5 bg-brand-blue" />
          </div>

          <h2
            className={`font-display text-4xl md:text-5xl text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Professional Journey
          </h2>

          <p
            className={`text-lg text-brand-grey max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Building expertise in US mortgage operations with a focus on compliance, accuracy, and client satisfaction
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-silver hidden md:block">
            <div
              className={`absolute top-0 left-0 w-full bg-brand-blue transition-all duration-1000 ${
                isVisible ? 'h-full' : 'h-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            />
          </div>

          {/* Job Cards */}
          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${0.4 + index * 0.2}s` }}
              >
                <div className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <button
                      onClick={() => setActiveJob(index)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeJob === index
                          ? 'bg-brand-blue scale-125 shadow-glow'
                          : 'bg-white border-4 border-brand-silver hover:border-brand-blue'
                      }`}
                    >
                      <job.icon className={`w-5 h-5 ${activeJob === index ? 'text-white' : 'text-brand-grey'}`} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                    <div
                      className={`bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-brand-silver/30 ${
                        activeJob === index ? 'ring-2 ring-brand-blue/20' : ''
                      }`}
                      onMouseEnter={() => setActiveJob(index)}
                    >
                      {/* Header */}
                      <div className={`flex items-start gap-4 mb-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`w-14 h-14 rounded-2xl ${job.color} flex items-center justify-center flex-shrink-0`}>
                          <job.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <h3 className="font-display text-2xl text-brand-black mb-1">{job.title}</h3>
                          <div className="flex items-center gap-2 text-brand-grey mb-1">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{job.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-brand-light-grey text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{job.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-brand-grey mb-6 leading-relaxed">{job.description}</p>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-brand-dark-grey mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-brand-grey">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold text-brand-dark-grey mb-3 flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-brand-blue" />
                          Key Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-brand-bg-blue text-brand-blue text-xs font-medium rounded-full hover:bg-brand-blue hover:text-white transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
