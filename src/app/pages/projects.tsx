// src/pages/projects.tsx
import React from 'react';

const ProjectsPage: React.FC = () => {
 // Sample projects data
 const projects = [
   {
     title: 'Project 1',
     description: 'This is a brief description of Project 1.',
     imageUrl: '/media/project1-thumbnail.jpg',
     liveUrl: 'https://live-example.com',
     codeUrl: 'https://github.com/example/project1',
   },
   {
     title: 'Project 2',
     description: 'This is a brief description of Project 2.',
     imageUrl: '/media/project2-thumbnail.jpg',
     liveUrl: 'https://live-example.com',
     codeUrl: 'https://github.com/example/project2',
   },
   // Add more projects as needed
 ];

 return (
   <div className="min-h-screen bg-gray-100 p-8">
     <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
     <div className="flex flex-wrap justify-center gap-8">
       {projects.map((project, index) => (
         <div key={index} className="bg-white p-6 rounded-lg shadow-md max-w-xs">
           <img
             src={project.imageUrl}
             alt={project.title}
             className="w-full h-40 object-cover rounded-md mb-4"
           />
           <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
           <p className="text-gray-700 mb-4">{project.description}</p>
           <div className="flex gap-4">
             <a
               href={project.liveUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
             >
               Live
             </a>
             <a
               href={project.codeUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
             >
               Code
             </a>
           </div>
         </div>
       ))}
     </div>
   </div>
 );
};

export default ProjectsPage;