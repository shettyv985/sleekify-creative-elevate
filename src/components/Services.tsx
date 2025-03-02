
import React from 'react';
import { 
  Paintbrush, 
  Code, 
  Smartphone, 
  LineChart, 
  Lightbulb, 
  ShieldCheck 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "We create intuitive, engaging interfaces that delight users and drive business results.",
      color: "bg-blue-50"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "From simple websites to complex web applications, we build fast, scalable digital products.",
      color: "bg-green-50"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform apps that deliver exceptional experiences across all devices.",
      color: "bg-purple-50"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Digital Strategy",
      description: "Data-driven strategies that align your digital presence with your business objectives.",
      color: "bg-orange-50"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Brand Identity",
      description: "We help you define and express your brand's unique personality and promise.",
      color: "bg-red-50"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Support & Maintenance",
      description: "Ongoing support to ensure your digital products perform flawlessly at all times.",
      color: "bg-teal-50"
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary relative overflow-hidden">
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
            Comprehensive solutions for your digital needs
          </h2>
          
          <p className="text-muted-foreground text-lg">
            We offer a full range of digital services to help you achieve your business goals, from strategy and design to development and ongoing support.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover-lift"
            >
              <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Ready to start your project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help you achieve your business goals with our comprehensive digital solutions.
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
