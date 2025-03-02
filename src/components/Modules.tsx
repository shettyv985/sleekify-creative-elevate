import React from 'react';
import { 
  Paintbrush, 
  Code, 
  Smartphone, 
  FileText, 
  Clock, 
  Globe 
} from 'lucide-react';

const Modules = () => {
  const modules = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Get Started with C#",
      description: "Learn the basic syntax and thought processes required to build simple applications using C#.",
      color: "bg-blue-50 dark:bg-blue-950/30",
      url: "https://learn.microsoft.com/en-us/plans/31zzc4mw2wk5re?learnerGroupId=b7182944-b5c1-48ea-a4c3-4af0afd344b1&wt.mc_id=studentamb_445636"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Explore AI",
      description: "Upon completion of this Plan, learners will be able to use Microsoft Copilot to conduct research, write copy and create visuals.",
      color: "bg-green-50 dark:bg-green-950/30",
      url: "https://learn.microsoft.com/en-us/plans/w255c4z7dm4dgr?tab=tab-created&learnerGroupId=63e70fa7-74df-4037-85c0-3a457228a531&wt.mc_id=nxg_studentamb_exp1_wwl_445636"
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Azure AI Fundamentals",
      description: "Develop foundational knowledge of AI concepts and related Azure services.",
      color: "bg-purple-50 dark:bg-purple-950/30",
      url: "https://learn.microsoft.com/en-us/plans/8pkkiy5x76oy7y?tab=tab-created&learnerGroupId=5e07982a-0871-4061-89b9-72ef47eb4bc1&wt.mc_id=studentamb_445636"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Get started with GitHub and GitHub Copilot",
      description: "Understand the basics of version control and learn to use key features of GitHub and GitHub Codespaces.",
      color: "bg-orange-50 dark:bg-orange-950/30",
      url: "https://learn.microsoft.com/en-us/plans/gm88tr6o5y5zyk?tab=tab-created&learnerGroupId=84c2deb1-7a68-4627-8f4e-024822445a83&wt.mc_id=studentamb_445636"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Copilot for Microsoft 365",
      description: "Develop foundational knowledge of Copilot for Microsoft 365 and explore real-world scenarios.",
      color: "bg-red-50 dark:bg-red-950/30",
      url: "https://learn.microsoft.com/en-us/plans/o1mmcm6o12jygw?tab=tab-created&learnerGroupId=00cbaf6d-22d2-47c2-89a4-a21a1494028d&wt.mc_id=studentamb_445636"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Microsoft Security, Compliance, and Identity Fundamentals",
      description: "Develop foundational knowledge of security, compliance, and identity and related Azure services.",
      color: "bg-teal-50 dark:bg-teal-950/30",
      url: "https://learn.microsoft.com/en-us/plans/5dyyborpmok24n?tab=tab-created&learnerGroupId=1a3b4669-cb37-4fa4-bbb7-5b5e6d5624e5&wt.mc_id=studentamb_445636"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Microsoft Power Platform Fundamentals",
      description: "Develop foundational knowledge of Microsoft Power Platform.",
      color: "bg-blue-50 dark:bg-blue-950/30",
      url: "https://learn.microsoft.com/en-us/plans/zkddhk2dw1d1op?tab=tab-created&learnerGroupId=162810d5-231c-4627-b6f8-cb3717bdc64b&wt.mc_id=studentamb_445636"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Azure Data Fundamentals",
      description: "Develop foundational knowledge of data concepts and related Azure services.",
      color: "bg-green-50 dark:bg-green-950/30",
      url: "https://learn.microsoft.com/en-us/plans/8pkkiy5xgxnpmw?tab=tab-created&learnerGroupId=5948a6e0-b875-4efd-8fa6-f47e3d5cffd6&wt.mc_id=studentamb_445636"
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Azure Fundamentals",
      description: "Develop foundational knowledge of cloud concepts and related Azure services.",
      color: "bg-purple-50 dark:bg-purple-950/30",
      url: "https://learn.microsoft.com/en-us/plans/qdwwbm3p0x7gom?tab=tab-created&learnerGroupId=709a19f8-25ae-40b9-91a1-3b74ae548009&wt.mc_id=studentamb_445636"
    }
  ];

  return (
    <section id="modules" className="section-padding bg-secondary dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-sm uppercase tracking-widest font-medium">Modules</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Modules to Cover
          </h2>
          
          <p className="text-muted-foreground text-lg">
            We deliver comprehensive technical solutions that transform ideas into robust, scalable digital products.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <a 
              key={index} 
              href={module.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-accent rounded-2xl p-8 shadow-sm hover-lift block"
            >
              <div className={`${module.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                {module.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{module.title}</h3>
              <p className="text-muted-foreground">{module.description}</p>
            </a>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 dark:bg-white/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Submit your details here
              </h3>
              <p className="text-muted-foreground mb-6">
                Stand A chance to win exciting prizes
              </p>
              <a 
                href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAXmPf9BUQUs2VklVVzdVRkkwTFI5MlkzNjQxQ1lSWS4u&route=shorturl" 
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

export default Modules;