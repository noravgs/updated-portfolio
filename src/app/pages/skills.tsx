import React from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SkillsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Skills - Nora Vargas Portfolio</title>
        <meta name="description" content="Explore the skills of Nora Vargas, a Software Engineer specializing in JavaScript, Python, React, Node.js, Figma, and Webflow. Discover the expertise that drives innovative and effective solutions." />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold mb-8">My Skills</h1>
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <i className="fab fa-js-square fa-5x mb-4 text-yellow-500"></i>
            <p className="text-lg">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-python fa-5x mb-4 text-blue-500"></i>
            <p className="text-lg">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-react fa-5x mb-4 text-blue-600"></i>
            <p className="text-lg">React</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-node fa-5x mb-4 text-green-500"></i>
            <p className="text-lg">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-figma fa-5x mb-4 text-purple-500"></i>
            <p className="text-lg">Figma</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fab fa-webflow fa-5x mb-4 text-blue-600"></i>
            <p className="text-lg">Webflow</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
