import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => (
  <div>
    {/* Card container */}
    <Link to={project.id} className="block group">
      <div className="overflow-hidden rounded-lg card-shadow relative bg-white h-full transition-shadow duration-300">
        <div className="relative">
          {/* Project Image with hover zoom + rotate effect */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[3deg]"
          />
          {/* Modern hover button overlay - uses App.css for animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="button opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              tabIndex={-1}
            >
              <p className="button__text">
                <span style={{ "--index": 0 }}>V</span>
                <span style={{ "--index": 1 }}>I</span>
                <span style={{ "--index": 2 }}>E</span>
                <span style={{ "--index": 3 }}>W</span>
                <span style={{ "--index": 4 }}> </span>
                <span style={{ "--index": 5 }}>P</span>
                <span style={{ "--index": 6 }}>R</span>
                <span style={{ "--index": 7 }}>O</span>
                <span style={{ "--index": 8 }}>J</span>
                <span style={{ "--index": 9 }}>E</span>
                <span style={{ "--index": 10 }}>C</span>
                <span style={{ "--index": 11 }}>T</span>
              </p>
              <div className="button__circle">
                {/* Arrow animation handled by App.css */}
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon"
                  width="14"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon button__icon--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Link>
    {/* Project Title & Description BELOW the card */}
    <div className="mt-4">
      <h3 className="text-2xl font-bold text-sapphire-300">{project.title}</h3>
      <p className="text-base text-gray-400">{project.description}</p>
    </div>
  </div>
);

export default ProjectCard;
