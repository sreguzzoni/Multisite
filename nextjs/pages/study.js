import React from 'react';

const Study = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex flex-col items-center text-white py-10">
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Study</h1>
        <p className="text-lg mb-8">A showcase of my educational background.</p>
      </div>
      <div className="container mx-auto px-4">
        <div className="study-list space-y-8">
          <div className="study-item bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Bachelor's Degree in Computer Science</h2>
            <p className="text-gray-600 mb-4">Sep 2014 - Jun 2018</p>
            <p className="text-gray-800">Studied various aspects of computer science including algorithms, data structures, software engineering, and web development. Participated in numerous projects and hackathons.</p>
          </div>
          <div className="study-item bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Master's Degree in Software Engineering</h2>
            <p className="text-gray-600 mb-4">Sep 2018 - Jun 2020</p>
            <p className="text-gray-800">Specialized in advanced software engineering principles, cloud computing, and distributed systems. Completed a thesis on scalable web applications using cloud technologies.</p>
          </div>
          <div className="study-item bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Online Courses and Certifications</h2>
            <p className="text-gray-600 mb-4">Ongoing</p>
            <p className="text-gray-800">Continuously learning through various online platforms such as Coursera, Udemy, and edX. Completed courses in machine learning, data science, and full-stack development.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
