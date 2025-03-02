
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Craftsmanship",
      description: "We believe in meticulous attention to detail and the pursuit of excellence in every project."
    },
    {
      title: "Innovation",
      description: "We constantly explore new technologies and creative approaches to solve complex problems."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to ensure their vision is realized to its fullest potential."
    }
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-primary/5">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80" 
                  alt="Our team" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-2xl -z-10"></div>
            </div>
          </div>
          
          <div className="md:col-span-7 md:pl-8">
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-sm uppercase tracking-widest font-medium">About Us</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                A passionate team of digital craftsmen
              </h2>
              
              <p className="text-muted-foreground text-lg">
                Founded in 2010, we're a team of designers, developers, and strategists who share a passion for creating exceptional digital experiences. We combine innovative thinking with technical expertise to help brands stand out in a crowded digital landscape.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="bg-secondary rounded-xl p-6 hover-lift">
                <h3 className="text-xl font-bold mb-2">12+</h3>
                <p className="text-muted-foreground">Years of experience</p>
              </div>
              
              <div className="bg-secondary rounded-xl p-6 hover-lift">
                <h3 className="text-xl font-bold mb-2">200+</h3>
                <p className="text-muted-foreground">Projects completed</p>
              </div>
              
              <div className="bg-secondary rounded-xl p-6 hover-lift">
                <h3 className="text-xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">Team members</p>
              </div>
              
              <div className="bg-secondary rounded-xl p-6 hover-lift">
                <h3 className="text-xl font-bold mb-2">15+</h3>
                <p className="text-muted-foreground">Industry awards</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Our core values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
