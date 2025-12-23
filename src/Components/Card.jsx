const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glow = true,
  ...props 
}) => {
  const baseStyles = 'bg-white/50 dark:bg-black/30 backdrop-blur-xl border border-lime-500/30 dark:border-lime-500/30 rounded-xl overflow-hidden transition-all duration-300';
  const hoverStyles = hover ? 'hover:border-lime-400/50 hover:bg-white/70 dark:hover:bg-black/40 hover:shadow-lg hover:shadow-lime-500/10 hover:-translate-y-1' : '';
  const glowStyles = glow ? 'shadow-lg shadow-lime-500/5' : '';
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

