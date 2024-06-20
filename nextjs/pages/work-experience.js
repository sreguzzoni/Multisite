import React from 'react';

const WorkExperience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center text-white py-10">
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <p className="text-lg mb-8">A showcase of my professional work experience.</p>
      </div>
      <div className="container mx-auto px-4">
        <div className="work-list space-y-8">
          <div className="work-item bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Software Engineer</h2>
            <p className="text-gray-600 mb-4">Jan 2020 - Present</p>
            <p className="text-gray-800">Developed various features and maintained applications using React, Node.js, and AWS. Collaborated with cross-functional teams to deliver high-quality software solutions.</p>
          </div>
          <div className="work-item bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Frontend Developer</h2>
            <p className="text-gray-600 mb-4">Jun 2018 - Dec 2019</p>
            <p className="text-gray-800">Worked on building responsive and user-friendly web applications using HTML, CSS, and JavaScript. Improved website performance and user experience through optimization techniques.</p>
          </div>
          <div className="work-item bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Intern</h2>
            <p className="text-gray-600 mb-4">Jan 2017 - May 2018</p>
            <p className="text-gray-800">Assisted in the development of internal tools and applications. Gained hands-on experience with software development practices and tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
