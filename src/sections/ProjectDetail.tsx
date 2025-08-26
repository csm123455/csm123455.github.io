import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import styled from 'styled-components';

const ProjectDetailContainer = styled.div`
  padding: 80px 20px;
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
`;

const LinkContainer = styled.div`
  margin-top: 20px;
  a {
    display: inline-block;
    margin-right: 15px;
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 40px;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <ProjectDetailContainer>
        <Title>Project Not Found</Title>
        <BackLink to="/">Back to Projects</BackLink>
      </ProjectDetailContainer>
    );
  }

  return (
    <ProjectDetailContainer>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>

      {project.notionLink && (
        <LinkContainer>
          <a href={project.notionLink} target="_blank" rel="noopener noreferrer">Notion Page</a>
        </LinkContainer>
      )}

      {project.githubLinks && project.githubLinks.length > 0 && (
        <LinkContainer>
          GitHub Repositories:
          {project.githubLinks.map((link, idx) => (
            <React.Fragment key={idx}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link.split('/').pop()}
              </a>
              {idx < project.githubLinks.length - 1 && ', '}
            </React.Fragment>
          ))}
        </LinkContainer>
      )}

      <BackLink to="/">Back to Projects</BackLink>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;