// src/pages/intro.tsx
import React from 'react';

const IntroPage: React.FC = () => {
 return (
   <div
     className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center text-white"
   >
     <h1 className="text-4xl font-montserrat font-bold mb-4">Welcome to My Portfolio</h1>
     <p className="text-lg mb-6 font-montserrat font-light">
     Hola! My name is Nora Vargas, a Software Engineer with a strong design sense. I&apos;m passionate about crafting AI applications and fullstack solutions that solve real-world problems. Let&apos;s work together to bring your ideas to life with creativity and expertise.
     </p>
     <div className="mt-8">
       <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
       <div className="flex justify-center gap-6">
         <a
           href="https://github.com/noravgs"
           target="_blank"
           rel="noopener noreferrer"
           className="text-white hover:text-gray-400 transition-colors"
         >
           <i className="fab fa-github fa-2x"></i> GitHub
         </a>
         <a
           href="https://linkedin.com/in/noravgs"
           target="_blank"
           rel="noopener noreferrer"
           className="text-white hover:text-gray-400 transition-colors"
         >
           <i className="fab fa-linkedin fa-2x"></i> LinkedIn
         </a>
         {/* Add more links as needed */}
       </div>
     </div>
   </div>
 );
};

export default IntroPage;