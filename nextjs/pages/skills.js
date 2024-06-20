import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const hardSkillsData = {
  labels: ['JavaScript', 'Python', 'CSS', 'HTML', 'React', 'Node.js'],
  datasets: [
    {
      label: 'Proficiency',
      data: [85, 75, 90, 95, 80, 70],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
    },
  ],
};

const softSkillsData = {
  labels: ['Communication', 'Teamwork', 'Problem-Solving', 'Adaptability', 'Creativity', 'Time Management'],
  datasets: [
    {
      label: 'Proficiency',
      data: [90, 85, 80, 75, 95, 70],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
  },
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 via-green-500 to-blue-500 flex flex-col items-center text-white py-10">
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <p className="text-lg mb-8">A showcase of my technical and soft skills.</p>
      </div>
      <div className="container mx-auto px-4">
        <Carousel 
          showArrows={true} 
          showIndicators={false}
          swipeable={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          showThumbs={false} 
          showStatus={false} 
        >
          <div className="skills-item bg-white text-black p-6 rounded-lg shadow-lg w-3/4 mx-auto max-w-screen-md">
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <div className="w-full h-96">
              <Bar data={hardSkillsData} options={options} />
            </div>
          </div>
          <div className="skills-item bg-white text-black p-6 rounded-lg shadow-lg w-3/4 mx-auto max-w-screen-md">
            <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>
            <div className="w-full h-96">
              <Bar data={softSkillsData} options={options} />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;
