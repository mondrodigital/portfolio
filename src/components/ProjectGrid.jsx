import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import SectionHeader from './SectionHeader';

const StatusBadge = ({ status }) => {
  const colors = {
    'Shipped': 'bg-gray-100 text-gray-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    'Beta': 'bg-purple-100 text-purple-800'
  };

  return (
    <span className={`${colors[status]} px-3 py-1 rounded-full text-sm font-medium`}>
      {status}
    </span>
  );
};

const ProjectCard = ({ project, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="group">
      <Link to={`/project/${project.id}`}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay }}
          className="space-y-4 transform transition-all duration-300 hover:scale-[1.02]"
        >
          {/* Card */}
          <div className="bg-white rounded-lg overflow-hidden">
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content below card */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-lg sm:text-xl font-medium text-gray-900">{project.title}</h3>
              <StatusBadge status={project.status} />
            </div>
            <div className="min-h-[4.5rem]">
              <p className="text-sm sm:text-base text-gray-600 line-clamp-3 leading-6">{project.description}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">{project.date.split(' ')[1]}</p>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Try it live →
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

const ProjectGrid = () => {
  return (
    <div className="pt-12 sm:pt-20">
      <div className="mb-4 sm:mb-6">
        <SectionHeader title="Projects" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;