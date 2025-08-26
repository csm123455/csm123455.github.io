import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { FaGithub, FaFilePdf } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">프로젝트 소개</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <Link to={`/projects/${project.id}`} className="project-card-main-link">
                <div className="project-image-container">
                  <img src={project.image} alt={`${project.title} 이미지`} className="project-image" />
                </div>
                <div className="project-content-top">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </Link>
              <div className="project-content-bottom">
                
                <div className="project-links">
                  <div className="github-links">
                    {project.githubLinks.map((link, index) => (
                      <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" title={`GitHub: ${link.name}`}>
                        <FaGithub />
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                  {project.notionUrl && project.notionUrl !== '#' && (
                    <a href={project.notionUrl} target="_blank" rel="noopener noreferrer" title="Notion Page" className="notion-link">
                      <SiNotion />
                    </a>
                  )}
                  {project.presentationPdfUrl && (
                    <a href={project.presentationPdfUrl} target="_blank" rel="noopener noreferrer" title="발표자료 다운로드" className="presentation-link">
                      <FaFilePdf />
                      <span>발표자료</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;