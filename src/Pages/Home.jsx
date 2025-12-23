import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faGithub, faHtml5, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import Card from '../Components/Card';
import SectionHeader from '../Components/SectionHeader';
import Badge from '../Components/Badge';
import Footer from '../Components/Footer';
import projectsData from '../data/projects.json';

function Home() {
  const featuredProjects = projectsData.slice(0, 3);
  const skills = [
    { name: 'React', icon: faReact },
    { name: 'Vue.js', icon: faVuejs },
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3 },
    { name: 'Git', icon: faGit },
    { name: 'Next.js', icon: faReact },
  ];

  const testimonials = [
    {
      quote: "Daniel is an exceptional frontend developer with a keen eye for detail and a passion for creating beautiful, functional interfaces.",
      author: "Client Review",
      role: "Project Manager"
    },
    {
      quote: "Working with Daniel has been a great experience. His technical skills and communication are top-notch.",
      author: "Team Lead",
      role: "Development Team"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-xl sm:text-2xl text-lime-600 dark:text-lime-400 font-accent animate-pulse-glow">
                Hi there!! 😁
              </h3>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold">
                <span className="text-gray-900 dark:text-white">I'm a </span>
                <span className="text-lime-600 dark:text-lime-400 font-accent">
                  <TypeAnimation
                    sequence={[
                      'Frontend Developer',
                      2000,
                      'Developer Advocate',
                      2000,
                      'Community Manager',
                      2000,
                    ]}
                    repeat={Infinity}
                    speed={50}
                  />
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                I design and code beautifully simple and complex things, manage awesome communities and I love what I do.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button href="/projects" variant="cta" size="lg">
                  View Projects
                </Button>
                <Button 
                  href="https://docs.google.com/document/d/1hoLnzDZPdZEWKbhwY_tv9fino-1nSOUq" 
                  variant="secondary" 
                  size="lg"
                >
                  Download CV
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-lime-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
                <img 
                  src="/images/dan.png" 
                  alt="Daniel Udofa" 
                  className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-lime-500/50 shadow-2xl shadow-lime-500/20 animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Skills" 
            subtitle="Technologies and tools I work with"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center p-6 group">
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className="text-5xl text-lime-400/50 group-hover:text-lime-400 transition-colors duration-300 mb-4"
                />
                <p className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/50 dark:bg-black/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="A selection of my recent work"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-lime-600 dark:text-lime-400 mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="default">{tech}</Badge>
                    ))}
                  </div>
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
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/projects" variant="cta" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Testimonials" 
            subtitle="What people say about my work"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-lime-400/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-lime-400 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
