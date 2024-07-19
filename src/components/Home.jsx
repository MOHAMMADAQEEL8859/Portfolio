import React, { useEffect, useState } from 'react';

const Home = () => {
  const messages = ['Web Developer', 'Tech Enthusiast', 'Nature Lover'];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); // Change message every 2 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className=" min-h-screen text-center  bg-blue-200 ">
        <p className="text-lg font-bold text-violet-600 pt-8">Hi, I am </p>
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Mohammad Aqeel.</h1>
      <p className="text-lg text-yellow-500">
        {messages[currentMessageIndex]}
      </p>
    </div>
  );
};

export default Home;
