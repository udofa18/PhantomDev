import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const { isDark } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(isDark);

  // Update when theme changes
  useEffect(() => {
    setIsDarkMode(isDark);
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particleCount = 50;
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check current theme
      const currentIsDark = document.documentElement.classList.contains('dark');
      
      // Adjust colors based on theme
      const particleColor = currentIsDark 
        ? `rgba(132, 204, 22, ${particlesRef.current[0]?.opacity || 0.5})` // lime-500 for dark
        : `rgba(101, 163, 13, ${particlesRef.current[0]?.opacity || 0.6})`; // darker lime for light
      
      const connectionColor = currentIsDark
        ? `rgba(132, 204, 22, ${0.1})`
        : `rgba(101, 163, 13, ${0.2})`;

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        const particleOpacity = currentIsDark ? particle.opacity : particle.opacity * 1.5;
        ctx.fillStyle = currentIsDark 
          ? `rgba(132, 204, 22, ${Math.min(particleOpacity, 1)})`
          : `rgba(101, 163, 13, ${Math.min(particleOpacity, 1)})`;
        ctx.fill();
      });

      // Draw connections
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const connectionOpacity = currentIsDark 
              ? 0.1 * (1 - distance / 150)
              : 0.25 * (1 - distance / 150);
            ctx.strokeStyle = currentIsDark
              ? `rgba(132, 204, 22, ${connectionOpacity})`
              : `rgba(101, 163, 13, ${connectionOpacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/10 via-transparent to-lime-500/5 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-bl from-lime-500/5 via-transparent to-lime-500/10" style={{ animation: 'pulse 4s ease-in-out infinite' }} />
      </div>

      {/* Grid Pattern - Light Mode */}
      <div 
        className="absolute inset-0 opacity-30 dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(101, 163, 13, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(101, 163, 13, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      {/* Grid Pattern - Dark Mode */}
      <div 
        className="absolute inset-0 opacity-20 hidden dark:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ mixBlendMode: isDarkMode ? 'screen' : 'multiply' }}
      />
    </div>
  );
};

export default AnimatedBackground;

