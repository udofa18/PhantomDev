import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  const socialLinks = [
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/daniel-udofa-865778149/', label: 'LinkedIn' },
    { icon: faGithub, href: 'https://github.com/udofa18', label: 'GitHub' },
    { icon: faTwitter, href: 'https://twitter.com/Udofa18', label: 'Twitter' },
    { icon: faEnvelope, href: 'mailto:danieludofa452@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-lime-500/20 dark:border-lime-500/20 bg-white/80 dark:bg-black/40 backdrop-blur-xl mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-lime-600 dark:text-lime-400 mb-2">PhantomDev</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Frontend Developer • Developer Advocate • Community Manager
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-lime-600 dark:text-lime-400 hover:text-lime-700 dark:hover:text-lime-300 transition-all duration-300 hover:scale-110 focus-visible-ring rounded-lg p-2"
                aria-label={link.label}
              >
                <FontAwesomeIcon icon={link.icon} className="text-2xl" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-lime-500/10 dark:border-lime-500/10 text-center">
          <p className="text-gray-600 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Daniel Udofa. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

