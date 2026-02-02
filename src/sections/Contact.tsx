import { useEffect, useRef, useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Linkedin,
  MessageSquare,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kochi, Kerala, India',
      href: '#',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 - 9061628936',
      secondaryValue: '+91 - 8891726985',
      href: 'tel:+919061628936',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'akashkmadhuofficial@gmail.com',
      href: 'mailto:akashkmadhuofficial@gmail.com',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:bg-[#0077b5]',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:akashkmadhuofficial@gmail.com',
      color: 'hover:bg-brand-blue',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 bg-brand-bg-grey overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/5 to-transparent" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl" />
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
            <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">Contact</span>
            <div className="w-8 h-0.5 bg-brand-blue" />
          </div>

          <h2
            className={`font-display text-4xl md:text-5xl text-brand-black mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Get In Touch
          </h2>

          <p
            className={`text-lg text-brand-grey max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Let's discuss how I can contribute to your mortgage operations team
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group flex items-start gap-4 p-4 rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-bg-blue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-light-grey mb-1">{item.label}</p>
                      <p className="font-medium text-brand-dark-grey group-hover:text-brand-blue transition-colors">
                        {item.value}
                      </p>
                      {item.secondaryValue && (
                        <p className="font-medium text-brand-dark-grey group-hover:text-brand-blue transition-colors">
                          {item.secondaryValue}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.7s' }}
              >
                <p className="text-sm text-brand-light-grey mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center text-brand-grey hover:text-white ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div
                className={`inline-flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-card transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.8s' }}
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <Clock className="w-4 h-4 text-brand-grey" />
                <span className="text-sm text-brand-dark-grey">Available for new opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-card-hover border border-brand-silver/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-xl text-brand-black">Send a Message</h3>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-display text-xl text-brand-black mb-2">Message Sent!</h4>
                  <p className="text-brand-grey">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-brand-dark-grey">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 rounded-xl border-brand-silver/30 focus:border-brand-blue focus:ring-brand-blue/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-brand-dark-grey">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 rounded-xl border-brand-silver/30 focus:border-brand-blue focus:ring-brand-blue/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-brand-dark-grey">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="rounded-xl border-brand-silver/30 focus:border-brand-blue focus:ring-brand-blue/20 transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-brand-blue hover:bg-brand-dark-blue text-white rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-glow disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
