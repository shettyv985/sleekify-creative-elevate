import React from 'react';
import { 
  Clock,
  Calendar,
  Medal
} from 'lucide-react';

const Process = () => {
  const process = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Step 1",
      description: "Complete the above modules within the given time, i.e. till 31st March 2025",
      color: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Step 2",
      description: "Submit your details in the given form. The deadline is 31st March 2025.",
      color: "bg-green-50 dark:bg-green-950/30"
    },
    {
      icon: <Medal className="h-8 w-8" />,
      title: "Step 3",
      description: "Win exciting prizes and goodies. Also, you can get a chance to work with MLSA XIET as a team member.",
      color: "bg-purple-50 dark:bg-purple-950/30"
    }
  ];

  return (
    <section id="process" className="section-padding bg-secondary dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-sm uppercase tracking-widest font-medium">Process</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Complete, Submit & Win with MLSA XIET!
          </h2>
          
          <p className="text-muted-foreground text-lg">
          Win prizes & goodies + a chance to join MLSA XIET!
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((service, index) => (
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
      </div>
    </section>
  );
};

export default Process;