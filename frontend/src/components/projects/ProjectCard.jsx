import { Link } from "react-router-dom";

// Card with image zoom+translate and VIEW PROJECT animated overlay
const ProjectCard = ({ project }) => (
  <div className="relative group">
    <Link to={project.link} className="block group h-full outline-none">
      <div className="relative overflow-hidden rounded-3xl border-2 border-[#e3f2fd] bg-white/90 shadow-2xl hover:shadow-blue-200/70 transition-all duration-300 backdrop-blur-xl h-full flex flex-col">
        {/* Image with translate and zoom on hover */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[3deg]"
        />
        {/* Category badge */}
        <span className="absolute top-4 left-4 px-4 py-2 bg-[#3178c6]/90 text-white text-xs rounded-full font-semibold z-20 shadow-md uppercase tracking-wider">
          {project.category}
        </span>
        {/* Fancy overlay button group */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
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
        {/* Info - title, desc under image */}
        <div className="flex-1 flex flex-col p-8 min-h-[120px]">
          <h3 className="services-card-lead text-xl md:text-2xl mb-1">{project.title}</h3>
          <p className="font-inter text-base md:text-lg text-[#46658f] mb-3">{project.description}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default ProjectCard;
