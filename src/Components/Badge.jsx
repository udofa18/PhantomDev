const Badge = ({ 
  children, 
  variant = 'default', 
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200';
  
  const variants = {
    default: 'bg-lime-500/20 text-lime-600 dark:text-lime-400 border border-lime-500/30',
    secondary: 'bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white border border-gray-300 dark:border-white/20',
    success: 'bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30',
    info: 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30'
  };
  
  return (
    <span 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;

