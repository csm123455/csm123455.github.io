import React from 'react';

const projects = [
  {
    title: '프로젝트 1',
    description: '간단한 설명이 들어갑니다.',
  },
  {
    title: '프로젝트 2',
    description: '간단한 설명이 들어갑니다.',
  },
  {
    title: '프로젝트 3',
    description: '간단한 설명이 들어갑니다.',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">프로젝트</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
