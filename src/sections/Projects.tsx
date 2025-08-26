import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { projects } from '../data/projectsData'; // Import projects data

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">프로젝트</h2>
        <div className="projects-grid">
          {projects.map((project) => ( // Removed index, using project.id for key
            <Link to={`/projects/${project.id}`} key={project.id} className="project-card-link"> {/* Make card clickable */}
              <div className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.notionLink && (
                  <p>
                    <a href={project.notionLink} target="_blank" rel="noopener noreferrer">Notion Page</a>
                  </p>
                )}
                {project.githubLinks && project.githubLinks.length > 0 && (
                  <p>
                    GitHub:
                    {project.githubLinks.map((link, idx) => (
                      <React.Fragment key={idx}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                          {link.split('/').pop()}
                        </a>
                        {idx < project.githubLinks.length - 1 && ', '}
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
