import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function SkillsPage() {
  const frontendSkills = [
    { name: 'HTML', logo: '/media/HTML5_Logo_128.png' },
    { name: 'CSS', logo: '/media/css-3.png' },
    { name: 'JavaScript', logo: '/media/java-script.png' },
    { name: 'ReactJS', logo: '/media/react.png' },
    { name: 'NextJS', logo: '/media/nextjs-icon-svgrepo-com.svg' },
    { name: 'Tailwind CSS', logo: '/media/tailwind-svgrepo-com.svg' }
  ];

  const backendSkills = [
    { name: 'Python', logo: '/media/python.png' },
    { name: 'ExpressJS', logo: '/media/express-svgrepo-com.png' },
    { name: 'NodeJS', logo: '/media/node-js-svgrepo-com.png' },
    { name: 'PostgreSQL', logo: '/media/PostgreSQL_logo.3colors.120x120 (1).png' },
    { name: 'MongoDB', logo: '/media/mongodb-svgrepo-com.png' },
    { name: 'Firebase', logo: '/media/Logomark_Full Color.png' }
  ];

  const designSkills = [
    { name: 'Figma', logo: '/media/figma-svgrepo-com.png' },
    { name: 'Canva', logo: '/media/Canva_icon_2021.svg.png' },
    { name: 'Adobe Illustrator', logo: '/media/adobe-illustrator-svgrepo-com.png' },
    { name: 'Adobe Photoshop', logo: '/media/photoshop.png' },
    { name: 'Adobe InDesign', logo: '/media/indesign.png' }
  ];

  const renderSkillCards = (skills: { name: string; logo: string }[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div key={skill.name} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <Image src={skill.logo} alt={`${skill.name} logo`} width={64} height={64} />
          <p className="mt-2 text-center">{skill.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Head>
        <title>Skills - Nora Vargas Portfolio</title>
        <meta name="description" content="Explore the skills of Nora Vargas, a Software Engineer specializing in JavaScript, Python, React, Node.js, Figma, and more. Discover the expertise that drives innovative and effective solutions." />
      </Head>
      <div className="min-h-screen py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
        <div className="max-w-6xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Frontend</h2>
            {renderSkillCards(frontendSkills)}
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Backend</h2>
            {renderSkillCards(backendSkills)}
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Design</h2>
            {renderSkillCards(designSkills)}
          </section>
        </div>
      </div>
    </>
  );
};


