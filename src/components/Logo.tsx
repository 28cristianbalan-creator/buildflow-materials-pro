import { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a href="#home" className={`flex items-center hover:scale-105 transition-transform duration-300 ${className}`}>
      <img 
        src={scrolled ? "/logos/buildflow-logo-dark.png" : "/logos/buildflow-logo-light.png"} 
        alt="BuildFlow Logo" 
        className="h-12 lg:h-14 w-auto transition-all duration-300"
      />
    </a>
  );
};

export default Logo;