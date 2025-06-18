
const ProjectFilters = ({ activeFilter, setActiveFilter, filters }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`px-5 py-2 rounded-full transition-all duration-300 ${
            activeFilter === filter.id 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveFilter(filter.id)}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;