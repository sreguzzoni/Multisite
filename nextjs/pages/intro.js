import React from 'react';

const Intro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col justify-center items-center text-white">
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Technologies Used</h1>
        <p className="text-lg mb-8">This section showcases the technologies related to work experience and study.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="tech-item p-6 bg-white text-black rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h2 className="text-2xl font-bold mb-2">Next.js</h2>
          <p>A React framework for production.</p>
        </div>
        <div className="tech-item p-6 bg-white text-black rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h2 className="text-2xl font-bold mb-2">React</h2>
          <p>A JavaScript library for building user interfaces.</p>
        </div>
        <div className="tech-item p-6 bg-white text-black rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h2 className="text-2xl font-bold mb-2">Tailwind CSS</h2>
          <p>A utility-first CSS framework for rapid UI development.</p>
        </div>
        <div className="tech-item p-6 bg-white text-black rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h2 className="text-2xl font-bold mb-2">Docker</h2>
          <p>Containerization platform for packaging and running applications.</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
