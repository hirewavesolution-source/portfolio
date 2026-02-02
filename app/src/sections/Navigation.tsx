import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Glassmorphism effect
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-lg'
          : 'bg-transparent'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[1230px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[75px]">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl font-semibold text-brand-black hover:text-brand-blue transition-colors duration-300 hover:scale-105 transform"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Akash K Madhu
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="relative text-sm font-medium text-brand-dark-grey hover:text-brand-blue transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-brand-blue hover:bg-brand-dark-blue text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow animate-pulse-glow"
              onClick={() => {
                // Create a simple resume download
                const resumeContent = `AKASH K MADHU
US Mortgage Professional

Contact:
Kochi, Kerala, India
+91 - 9061628936 | +91 - 8891726985
akashkmadhuofficial@gmail.com

PROFILE:
US mortgage professional with a keen eye for detail, specializing in Closing Disclosure (CD) preparation. An adaptive and quick learner with strong problem-solving skills and a solid understanding of the mortgage process.

EXPERIENCE:
US Mortgage Closing Processor | PrivoCorp | Dec 2024 - Dec 2025
• Prepared and analyzed Closing Disclosures (CDs)
• Verified payoffs, property taxes, and recording fees
• Ensured TRID compliance and regulatory adherence
• Coordinated with title/escrow teams

US Mortgage Collection Processor | PrivoCorp | Dec 2024 - Dec 2025
• Handled borrower calls for repayment options
• Utilized MSP for account management
• Performed skip tracing and collection efforts

EDUCATION:
Bachelor of Commerce (Finance and Taxation) | St. Berchmans College | 2020-2024
CCTA (G-TEC Certificate) | ILC Academy | 2024
Tally Certification | 2023

SKILLS:
RamQuest, ICE, American Title, FICS, MSP, Property Tax Search Tools
Attention to Detail, Problem-Solving, Communication, Time Management

LANGUAGES:
Malayalam (Native), English (Professional), Hindi (Conversational)`;
                
                const blob = new Blob([resumeContent], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Akash_K_Madhu_Resume.txt';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-black hover:text-brand-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left text-brand-dark-grey hover:text-brand-blue font-medium py-2 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button
            className="w-full bg-brand-blue hover:bg-brand-dark-blue text-white mt-4"
            onClick={() => {
              const resumeContent = `AKASH K MADHU - Resume`;
              const blob = new Blob([resumeContent], { type: 'text/plain' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'Akash_K_Madhu_Resume.txt';
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </nav>
  );
}
