// src/pages/skills.tsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const SkillsPage: React.FC = () => {
 return (
   <div className="p-8">
     <h1 className="text-2xl font-bold text-center mb-8">My Skills</h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
       <div className="flex flex-col items-center space-y-2">
         <i className="fab fa-js-square text-4xl text-black"></i> {/* JavaScript Icon */}
         <p className="text-lg">JavaScript</p>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <i className="fab fa-python text-4xl text-black"></i> {/* Python Icon */}
         <p className="text-lg">Python</p>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <i className="fab fa-react text-4xl text-black"></i> {/* React Icon */}
         <p className="text-lg">React</p>
       </div>
       <div className="flex flex-col items-center space-y-2">
         <i className="fab fa-node text-4xl text-black"></i> {/* Node.js Icon */}
         <p className="text-lg">Node.js</p>
       </div>
       
       <div className="flex flex-col items-center space-y-2">
         <i className="fab fa-figma text-4xl text-black"></i> {/* Figma Icon */}
         <p className="text-lg">Figma</p>
       </div>
       
       
       <div className="flex flex-col items-center space-y-2">
         <i className="fab fa-webflow text-4xl text-black"></i> {/* Webflow Icon */}
         <p className="text-lg">Webflow</p>
       </div>
     </div>
   </div>
 );
};

export default SkillsPage;
