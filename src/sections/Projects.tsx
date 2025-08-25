import React from 'react';
import { Project } from '../data/content';

interface ProjectsProps {
  data: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">프로젝트</h2>
        <div className="projects-grid">
          {data.map((project, index) => (
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