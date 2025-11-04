

import { Link } from 'react-router-dom';

const ProjectCard = ({ project, filterName ,  }) => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-lg shadow-lg card-shadow">
        <Link to={project.id}>
          <div className="relative overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <p className="text-white/80 text-sm">{filterName}</p>
              </div>
            </div>
          </div>
        </Link>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-sapphire-300 mb-2">{project.title}</h3>
          <p className="text-sm text-gray-400 mb-4">{filterName}</p>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <Link 
            to={project.id} 
            className="text-sapphire-500 font-medium flex items-center hover:text-sapphire-300 transition-colors"
          >
            View Project
            <svg 
              className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
