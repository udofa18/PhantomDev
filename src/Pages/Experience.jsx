import SectionHeader from '../Components/SectionHeader';
import Badge from '../Components/Badge';
import Card from '../Components/Card';
import experienceData from '../data/experience.json';

function Experience() {
  // Separate work and education
  const workExperience = experienceData.filter(exp => exp.type === 'work');
  const education = experienceData.filter(exp => exp.type === 'education');

  const TimelineItem = ({ experience, isLast }) => (
    <div className="relative flex gap-6 pb-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-lime-500/20"></div>
      )}
      
      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-lime-500/20 border-2 border-lime-500/50 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-lime-400"></div>
                                </div>
                            </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <Card className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                <div>
              <h3 className="text-xl font-bold text-lime-400 mb-1">
                {experience.title}
              </h3>
              <p className="text-lg text-gray-900 dark:text-white font-semibold mb-1">
                {experience.company}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{experience.dateRange}</p>
                                </div>
                            </div>

          {/* Achievements */}
          <ul className="space-y-2 mb-4">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-lime-400 mt-1">▹</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
                        </li>
            ))}
                    </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-lime-500/20">
            {experience.techStack.map((tech, idx) => (
              <Badge key={idx} variant="default">{tech}</Badge>
            ))}
                </div>
        </Card>
                                </div>
                            </div>
  );

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Experience" 
          subtitle="My professional journey and educational background"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h2 className="text-2xl font-bold text-lime-400 mb-8 flex items-center gap-3">
              <span className="text-gray-500 dark:text-white/50">&lt;</span>
              Work Experience
              <span className="text-white/50">/&gt;</span>
            </h2>
            <div className="space-y-0">
              {workExperience.map((exp, index) => (
                <TimelineItem 
                  key={exp.id} 
                  experience={exp}
                  isLast={index === workExperience.length - 1}
                />
              ))}
                                </div>
                            </div>

          {/* Education */}
                                <div>
            <h2 className="text-2xl font-bold text-lime-400 mb-8 flex items-center gap-3">
              <span className="text-gray-500 dark:text-white/50">&lt;</span>
              Education & Training
              <span className="text-white/50">/&gt;</span>
            </h2>
            <div className="space-y-0">
              {education.map((exp, index) => (
                <TimelineItem 
                  key={exp.id} 
                  experience={exp}
                  isLast={index === education.length - 1}
                />
              ))}
                                </div>
                            </div>
                </div>
                </div>
        </div>
    );
}

export default Experience;
