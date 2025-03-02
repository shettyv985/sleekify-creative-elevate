
import React from 'react';
import { 
  Paintbrush, 
  Code, 
  Smartphone, 
  LineChart, 
  Lightbulb, 
  ShieldCheck,
  FileText,
  Clock,
  Globe
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Full-stack development using modern technologies like React, Angular, Node.js, and more to create responsive, scalable web applications.",
      color: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform app development for iOS and Android, delivering exceptional user experiences across all devices.",
      color: "bg-green-50 dark:bg-green-950/30"
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive, engaging interfaces with user-centered design principles that delight users and drive business results.",
      color: "bg-purple-50 dark:bg-purple-950/30"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Technical Documentation",
      description: "Comprehensive, clear documentation for APIs, SDKs, and technical systems that helps users understand and implement complex technologies.",
      color: "bg-orange-50 dark:bg-orange-950/30"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Localization",
      description: "Professional translation and cultural adaptation services to help your products reach global markets effectively.",
      color: "bg-red-50 dark:bg-red-950/30"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Legacy System Modernization",
      description: "Transforming outdated systems into modern, scalable applications while preserving business logic and data integrity.",
      color: "bg-teal-50 dark:bg-teal-950/30"
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-sm uppercase tracking-widest font-medium">Our Services</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technical Excellence for Your Digital Needs
          </h2>
          
          <p className="text-muted-foreground text-lg">
            We deliver comprehensive technical solutions that transform ideas into robust, scalable digital products.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-accent rounded-2xl p-8 shadow-sm hover-lift"
            >
              <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 dark:bg-white/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Ready to elevate your digital presence?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how our technical expertise can help you achieve your business goals with innovative digital solutions.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center py-3 px-6 bg-primary text-primary-foreground rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                Get in touch
              </a>
            </div>
            
            <div className="relative ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl -z-10 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
