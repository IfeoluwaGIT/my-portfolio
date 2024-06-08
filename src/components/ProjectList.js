import React from 'react';
import Project from './Project';

const ProjectList = () => {
  const projects = [
    {
      title: 'React-Jobs',
      description: 'A practice React job website where you can check for React jobs, also built a simple backend where the data was fetched from ',
      link: 'https://github.com/IfeoluwaGIT/react-jobs'
    },
    {
      title: 'Spotify-by-Iboy',
      description: 'Spotify-by-Iboy is a dynamic React web application designed to enhance your music experience by allowing you to search the Spotify library, create custom playlists, and save them directly to your Spotify account. Leveraging the power of React components, state management, and the Spotify API, this project showcases advanced skills in front-end development and API integration.',
      link: 'https://github.com/IfeoluwaGIT/Spotify-by-Ife'
    },
    {
      title: 'My-Portfolio',
      description: 'This personal portfolio website, built with React, showcases my skills and projects in a visually engaging and interactive manner. The site features smooth SVG animations and a responsive design, ensuring an optimal viewing experience across all devices. It highlights my expertise in modern web development techniques and my ability to create polished, user-friendly web applications.',
      link: 'https://github.com/IfeoluwaGIT/Spotify-by-Ife'
    },
    // Add more projects here
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </section>
  );
};

export default ProjectList;
