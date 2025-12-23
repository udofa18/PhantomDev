import { useState, useMemo } from 'react';
import Card from '../Components/Card';
import Button from '../Components/Button';
import SectionHeader from '../Components/SectionHeader';
import Badge from '../Components/Badge';
import projectsData from '../data/projects.json';

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(projectsData.map(project => project.category))];
    return ['All', ...uniqueCategories];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') {
      return projectsData;
    }
    return projectsData.filter(project => project.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Projects" 
          subtitle="A collection of my work across different technologies and domains"
        />

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-lime-500/20 text-lime-400 border border-lime-500/50 shadow-lg shadow-lime-500/10'
                  : 'bg-white/80 dark:bg-black/40 text-gray-700 dark:text-gray-300 border border-lime-500/20 hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-400 hover:border-lime-500/40 transition-colors duration-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-lime-400 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, idx) => (
                      <Badge key={idx} variant="default">{tech}</Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button
                        href={project.liveUrl}
                        variant="primary"
                        size="sm"
                        className="flex-1"
                      >
                        Live
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        variant="secondary"
                        size="sm"
                        className="flex-1"
                      >
                        GitHub
                      </Button>
                    )}
                    {!project.githubUrl && project.liveUrl && (
                      <div className="flex-1"></div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            For more projects, visit my{' '}
            <a
              href="https://github.com/udofa18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-300 transition-colors underline"
            >
              GitHub Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
