// src/pages/intro.tsx
import React from 'react';

const IntroPage: React.FC = () => {
 return (
   <div  className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center text-white" >
     <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
     <p className="text-lg">
       Hola! My name is Nora Vargas, a Software Engineer with a strong design sense. I'm passionate about crafting AI applications and fullstack solutions that solve real-world problems. Let's work together to bring your ideas to life with creativity and expertise.
     </p>
   </div>
 );
};

export default IntroPage;
