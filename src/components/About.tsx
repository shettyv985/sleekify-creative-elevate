
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Technical Excellence",
      description: "We strive for the highest quality in every line of code and technical solution we deliver."
    },
    {
      title: "Continuous Learning",
      description: "We constantly expand our knowledge to stay at the forefront of technology and innovation."
    },
    {
      title: "Client Partnership",
      description: "We work collaboratively with clients to ensure their technical needs and business goals align."
    }
  ];

  return (
    <section id="about" className="section-padding bg-background dark:bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-primary/5">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
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
               Microsoft Learn Student Ambassadors XIET: Igniting Innovation
              </h2>
              
              <p className="text-muted-foreground text-lg">
              Led by Microsoft Learn Student Ambassadors, our technical club Microsoft Learn Student Ambassadors XIET on lighting a fire under zealous and spirited thinkers. Starting years back, we’ve been committed to serving the community. We regularly conduct events, organize workshops, technical talks, webinars, build community projects to develop young minds, and help them recognize and uncover their potential, under the esteemed name of the organization, to carry forth and express its legacy.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="bg-secondary dark:bg-accent rounded-xl p-6 hover-lift">
                <h3 className="text-xl font-bold mb-2">10+</h3>
                <p className="text-muted-foreground">Hackathons Conducted</p>
              </div>
              
              <div className="bg-secondary dark:bg-accent rounded-xl p-6 hover-lift">
                <h3 className="text-xl font-bold mb-2">10+</h3>
                <p className="text-muted-foreground">Webinars Organised</p>
              </div>
              
              <div className="bg-secondary dark:bg-accent rounded-xl p-6 hover-lift">
                <h3 className="text-xl font-bold mb-2">15+</h3>
                <p className="text-muted-foreground">Technologies mastered</p>
              </div>
              
              <div className="bg-secondary dark:bg-accent rounded-xl p-6 hover-lift">
                <h3 className="text-xl font-bold mb-2">24/7</h3>
                <p className="text-muted-foreground">Technical support</p>
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
