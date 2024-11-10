'use client';
import React from 'react';

const projects = [
  {
    title: 'Link Pages',
    url: 'https://github.com/AsmaIqbal01/link-pages',
  },
  {
    title: 'Resume Builder',
    url: 'https://github.com/AsmaIqbal01/milestone-5',
  },
  {
    title: '100 Days Coding Challenge',
    url: 'https://github.com/AsmaIqbal01/100-days-coding-challenge',
  },
  {
    title: 'Quiz App (Node Project)',
    url: 'https://github.com/AsmaIqbal01/Quiz_App',
  },
  {
    title: 'Adventure Game (CLI Based)',
    url: 'https://github.com/AsmaIqbal01/Adventure-Game',
  },
  {
    title: 'Simple Calculator',
    url: 'https://github.com/AsmaIqbal01/asm000-simpleCalculator',
  },
  {
    title: 'Currency Converter (Node Project)',
    url: 'https://github.com/AsmaIqbal01/Currency-Converter',
  },
];

const ProjectLinks = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-black text-white p-4">
      <h1 className="text-4xl font-bold mb-6 mt-14">My Projects</h1>
      <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Here are some of my projects:</h2>
        <ul className="list-disc list-inside">
          {projects.map((project, index) => (
            <li key={index} className="mb-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                {project.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectLinks;