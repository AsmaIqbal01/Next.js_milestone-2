'use client';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faFigma } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-gradient-to-r from-purple-600 to-black'} text-white`}>
      <h1 className="text-4xl font-bold mt-10">My Skills</h1>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
          <FontAwesomeIcon icon={faHtml5} className="text-6xl mb-2" />
          <span>HTML</span>
        </div>
        <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
          <FontAwesomeIcon icon={faCss3Alt} className="text-6xl mb-2" />
          <span>CSS</span>
        </div>
        <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
          <FontAwesomeIcon icon={faJsSquare} className="text-6xl mb-2" />
          <span>JavaScript</span>
        </div>
        <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
          <FontAwesomeIcon icon={faReact} className="text-6xl mb-2" />
          <span>React</span>
        </div>
        <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
          <FontAwesomeIcon icon={faFigma} className="text-6xl mb-2" />
          <span>Figma</span>
        </div>
        {/* Add more skills as needed */}
      </div>
    </div>
  );
};

export default Skills;