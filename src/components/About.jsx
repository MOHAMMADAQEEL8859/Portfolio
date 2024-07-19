import React from 'react';

const About = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">About Me</h1>
      {/* Your bio content */}
      <p className="text-black text-lg pt-4 pl-4">My name is <span className='text-red-500'>Mohammad Aqeel,</span> I am a full stack Developer
      . I hold a Bachelor's degree in Computer Science and Engineering. I have completed a full-stack development internship at AlmaBetter,
       where I gained hands-on experience in web development.

        I am proficient in front-end technologies such as HTML, CSS, JavaScript, and ReactJS. Additionally, I have a solid understanding of databases, 
        including MariaDB and MongoDB. I am passionate about developing innovative web applications and continuously improving my skills in full-stack development.. </p>
      <div className="mt-4 flex gap-2">
        <a 
          href="/resume.pdf" 
          download 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          My Resume
        </a>
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com/in/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default About;
