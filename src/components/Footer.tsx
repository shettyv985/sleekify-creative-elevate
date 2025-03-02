
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: '#' },
    { icon: <Twitter className="h-5 w-5" />, url: '#' },
    { icon: <Instagram className="h-5 w-5" />, url: '#' },
    { icon: <Linkedin className="h-5 w-5" />, url: '#' },
    { icon: <Github className="h-5 w-5" />, url: '#' }
  ];
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About', url: '#about' },
        { label: 'Services', url: '#services' },
        { label: 'Portfolio', url: '#portfolio' },
        { label: 'Careers', url: '#' },
        { label: 'Contact', url: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Web Development', url: '#' },
        { label: 'Mobile Development', url: '#' },
        { label: 'Technical Documentation', url: '#' },
        { label: 'Localization', url: '#' },
        { label: 'System Modernization', url: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', url: '#' },
        { label: 'Case Studies', url: '#' },
        { label: 'Testimonials', url: '#' },
        { label: 'Privacy Policy', url: '#' },
        { label: 'Terms of Service', url: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-primary dark:bg-black border-t dark:border-white/10 text-primary-foreground pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="/" className="text-2xl font-display font-bold mb-4 inline-block">
              L7 Studio
            </a>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              We're a team of technical experts passionate about creating exceptional digital experiences that solve complex challenges and drive business growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors duration-300 hover:bg-white/20"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-primary-foreground/80 text-sm">
            &copy; {currentYear} L7 Studio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
