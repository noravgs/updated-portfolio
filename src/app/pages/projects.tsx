import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: 'Trillion',
      description: 'Leading B2B distributor and wholesaler specializing in pre-owned electronic devices. We offer a wide range of high-quality refurbished devices, ensuring reliability and value for businesses.',
      imageUrl: '/media/trillion.png',
      liveUrl: 'https://trillionnow.com',
      codeUrl: '', // No code URL for this project
    },
    {
      title: 'talkTek',
      description: 'A B2C company specializing in the sale of pre-owned phones. The Shopify e-commerce platform offers a seamless shopping experience with detailed product listings, secure checkout, and comprehensive customer support, making it easy for consumers to find high-quality mobile devices.',
      imageUrl: '/media/talktek.png',
      liveUrl: 'https://talktek.com',
      codeUrl: '', // No code URL for this project
    },
    {
      title: 'Business Boost',
      description: 'A full-stack application designed to support and promote local businesses. It provides a platform for sharing and discovering small businesses while offering valuable resources and tools for aspiring entrepreneurs looking to start their own ventures.',
      imageUrl: '/media/bbimg.png',
      liveUrl: 'https://github.com/noravgs/business-boost',
      codeUrl: 'https://business-boost.cyclic.app/',
    },
    {
      title: 'Geisha',
      description: 'E-commerce website built on Webflow for a premium beauty brand. The site showcases an elegant and user-friendly interface, providing a seamless shopping experience for beauty products and services.',
      imageUrl: '/media/geishaThum.png',
      liveUrl: 'https://geisha-beauty.webflow.io/',
      codeUrl: '',
    },
    {
      title: 'Instant Cafe',
      description: 'A React application for coffee enthusiasts, offering an easy-to-use interface for ordering and delivery. Features include real-time order tracking, menu customization, and quick checkout.',
      imageUrl: '/media/instantimg.png',
      liveUrl: 'https://instantcafe.netlify.app',
      codeUrl: 'https://github.com/noravgs/instant-cafe',
    },
    {
      title: 'Monarch Salon',
      description: 'Static website developed with React for a modern beauty salon. The site features a stylish and responsive design, providing essential information about services, staff, and appointment scheduling.',
      imageUrl: '/media/salon.png',
      liveUrl: 'https://monarch-salon.netlify.app/',
      codeUrl: 'https://github.com/noravgs/monarch-salon-react',
    }
  ];

  return (
    <>
      <Head>
        <title>Projects - Nora Vargas Portfolio</title>
        <meta name="description" content="Explore the projects by Nora Vargas, a Software Engineer specializing in AI applications and fullstack solutions. Discover B2B and B2C e-commerce platforms, full-stack applications, and more." />
      </Head>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-8 font-montserrat">Projects</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md max-w-xs font-montserrat">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={160}
                className="rounded-md mb-4"
                objectFit="cover"
              />
              <h2 className="text-xl font-semibold mb-2 font-montserrat">{project.title}</h2>
              <p className="text-gray-700 mb-4 font-montserrat">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Live
                </a>
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
