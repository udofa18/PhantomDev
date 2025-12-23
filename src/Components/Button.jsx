import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '',
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-lime-500/20 text-lime-600 dark:text-lime-400 border border-lime-500/50 hover:bg-lime-500/30 hover:border-lime-400 hover:text-lime-700 dark:hover:text-lime-300 hover:shadow-lg hover:shadow-lime-500/20 focus:ring-lime-500/50',
    secondary: 'bg-transparent text-gray-800 dark:text-white border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/40 hover:text-gray-900 dark:hover:text-white focus:ring-gray-500 dark:focus:ring-white/50',
    ghost: 'bg-transparent text-lime-600 dark:text-lime-400 hover:bg-lime-500/10 hover:text-lime-700 dark:hover:text-lime-300 focus:ring-lime-500/50',
    cta: 'bg-gradient-to-r from-lime-500 to-lime-600 text-gray-900 border border-lime-400 hover:from-lime-400 hover:to-lime-500 hover:shadow-lg hover:shadow-lime-500/30 focus:ring-lime-500/50 font-semibold'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return (
        <a 
          href={href} 
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={classes}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

