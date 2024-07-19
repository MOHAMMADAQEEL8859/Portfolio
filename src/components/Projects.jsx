import React from 'react';

const Projects = () => {
  return (
    <div className="bg-cyan-300 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-lime-800">These are some projects given below</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-lime-800">Get YouTube Subscribers</h2>
        <p className="mb-4">A project to track YouTube subscribers.</p>
        <a 
          href="https://github.com/MOHAMMADAQEEL8859/GetYoutubeSubscribers" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          View on GitHub
        </a>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-lime-800">Cryptocurrency Dashboard</h2>
        <p className="mb-4">A dashboard to monitor cryptocurrency prices.</p>
        <a 
          href="https://github.com/MOHAMMADAQEEL8859/crypto-currency-deshboard" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          View on GitHub
        </a>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-lime-800">Entertainment App</h2>
        <p className="mb-4">A full-stack project for an entertainment app.</p>
        <a 
          href="https://github.com/MOHAMMADAQEEL8859/Entertainment-App-Full-Stack-Project" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
