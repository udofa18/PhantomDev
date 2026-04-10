const SectionHeader = ({ 
  title, 
  subtitle, 
  className = '',
  titleAs: TitleTag = 'h2',
  ...props 
}) => {
  return (
    <div className={`text-center mb-12 ${className}`} {...props}>
      <TitleTag className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-gray-500 dark:text-white/50">&lt;</span>
        <span className="text-lime-600 dark:text-lime-400">{title}</span>
        <span className="text-gray-500 dark:text-white/50">/&gt;</span>
      </TitleTag>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

