import { useEffect, useRef, useState } from 'react';
import { Heart, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="relative py-12 bg-white border-t border-brand-silver/30"
    >
      <div className="max-w-[1230px] mx-auto px-6 lg:px-12">
        {/* Top border animation */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-brand-blue to-transparent transition-all duration-1000 ${
            isVisible ? 'w-1/2' : 'w-0'
          }`}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="font-display text-xl font-semibold text-brand-black hover:text-brand-blue transition-colors"
            >
              Akash K Madhu
            </a>
          </div>

          {/* Copyright */}
          <div
            className={`text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <p className="text-sm text-brand-grey flex items-center gap-1">
              © {currentYear} Akash K Madhu. Made with
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              in Kerala
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div
            className={`flex items-center gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-brand-bg-grey flex items-center justify-center text-brand-grey hover:bg-[#0077b5] hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:akashkmadhuofficial@gmail.com"
              className="w-10 h-10 rounded-lg bg-brand-bg-grey flex items-center justify-center text-brand-grey hover:bg-brand-blue hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center text-white hover:bg-brand-dark-blue transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div
          className={`mt-8 pt-8 border-t border-brand-silver/20 flex flex-wrap justify-center gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          {['About', 'Experience', 'Skills', 'Education', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-brand-light-grey hover:text-brand-blue transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(`#${link.toLowerCase()}`);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
