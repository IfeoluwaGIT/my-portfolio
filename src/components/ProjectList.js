import React from 'react';
import Project from './Project';

const ProjectList = () => {
  const projects = [
    {
      title: 'React Jobs',
      description: 'A practice React job website where you can check for React jobs, also built a simple backend where the data was fetched from ',
      link: 'https://github.com/IfeoluwaGIT/react-jobs'
    },
    {
      title: 'Project 2',
      description: 'Description for project 2',
      link: 'http://example.com/project2'
    },
    {
      title: 'Project 3',
      description: 'Description for project 3',
      link: 'http://example.com/project2'
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
