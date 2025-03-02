
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Design' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'branding', label: 'Branding' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      category: 'web',
      imageUrl: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80',
      description: 'Complete overhaul of an e-commerce platform focusing on user experience and conversion optimization.'
    },
    {
      id: 2,
      title: 'Health & Fitness Mobile App',
      category: 'mobile',
      imageUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      description: 'A comprehensive fitness tracking application with personalized workout plans and nutrition guidance.'
    },
    {
      id: 3,
      title: 'Luxury Brand Identity',
      category: 'branding',
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80',
      description: 'Developing a sophisticated brand identity for a high-end fashion retailer, including logo, typography, and brand guidelines.'
    },
    {
      id: 4,
      title: 'Financial Services Platform',
      category: 'web',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      description: 'A secure, user-friendly platform for managing investments, tracking financial goals, and accessing financial advice.'
    },
    {
      id: 5,
      title: 'Travel Companion App',
      category: 'mobile',
      imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      description: 'An all-in-one travel application with itinerary planning, booking capabilities, and local recommendations.'
    },
    {
      id: 6,
      title: 'Restaurant Brand Refresh',
      category: 'branding',
      imageUrl: 'https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2674&q=80',
      description: 'Revitalizing the brand identity of a restaurant chain to attract a younger demographic while maintaining brand recognition.'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-sm uppercase tracking-widest font-medium">Our Portfolio</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured projects we're proud of
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of award-winning digital solutions that have helped our clients achieve their business objectives.
          </p>
          
          <div className="flex flex-wrap justify-center mt-8 mb-4 space-x-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl hover-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-white text-sm font-medium"
                >
                  View project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center py-3 px-6 border border-primary/20 rounded-full transition-all duration-300 hover:border-primary/40"
          >
            View all projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
