import React from 'react';

const Skills = () => {
  return (
    <div className="bg-rose-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Skills</h1>
      <div className="flex justify-around">
        {/* Scripting Languages */}
        <div className="bg-rose-200 p-2 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-xl font-bold mb-4">Scripting Languages</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">JavaScript</li>
            <li className="mb-2">ReactJS</li>
            <li className="mb-2">HTML</li>
            <li className="mb-2">CSS</li>
          </ul>
        </div>
        {/* Frameworks */}
        <div className="bg-rose-200 p-2 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-xl font-bold mb-4">Frameworks</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">Bootstrap</li>
            <li className="mb-2">Tailwind CSS</li>
          </ul>
        </div>
        {/* Databases */}
        <div className="bg-rose-200 p-2 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-xl font-bold mb-4">Databases</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">MariaDB</li>
            <li className="mb-2">MongoDB</li>
          </ul>
        </div>
        {/* Hosting Platforms */}
        <div className="bg-rose-200 p-2 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <h2 className="text-xl font-bold mb-4">Hosting Platforms</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">Vercel</li>
            <li className="mb-2">GitHub</li>
            <li className="mb-2">OpenRender</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
