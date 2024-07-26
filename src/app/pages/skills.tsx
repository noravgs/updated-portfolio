// src/pages/skills.tsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SkillsPage: React.FC = () => {
 return (
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
 );
};

// const SkillsPage: React.FC = () => {
//  return (
//    <div className="p-8">
//      <h1 className="text-2xl font-bold text-center mb-8">My Skills</h1>
//      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//        <div className="flex flex-col items-center space-y-2">
//          <i className="fab fa-js-square text-4xl text-black"></i> {/* JavaScript Icon */}
//          <p className="text-lg">JavaScript</p>
//        </div>
//        <div className="flex flex-col items-center space-y-2">
//          <i className="fab fa-python text-4xl text-black"></i> {/* Python Icon */}
//          <p className="text-lg">Python</p>
//        </div>
//        <div className="flex flex-col items-center space-y-2">
//          <i className="fab fa-react text-4xl text-black"></i> {/* React Icon */}
//          <p className="text-lg">React</p>
//        </div>
//        <div className="flex flex-col items-center space-y-2">
//          <i className="fab fa-node text-4xl text-black"></i> {/* Node.js Icon */}
//          <p className="text-lg">Node.js</p>
//        </div>
       
//        <div className="flex flex-col items-center space-y-2">
//          <i className="fab fa-figma text-4xl text-black"></i> {/* Figma Icon */}
//          <p className="text-lg">Figma</p>
//        </div>
       
       
//        <div className="flex flex-col items-center space-y-2">
//          <i className="fab fa-webflow text-4xl text-black"></i> {/* Webflow Icon */}
//          <p className="text-lg">Webflow</p>
//        </div>
//      </div>
//    </div>
//  );
// };

export default SkillsPage;
