import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container project-detail-container">
        <h2>프로젝트를 찾을 수 없습니다.</h2>
        <Link to="/" className="back-link">홈으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <section className="project-detail-section">
      <div className="container project-detail-container">
        <Link to="/" className="back-link">← 뒤로가기</Link>
        <h1>{project.title}</h1>
        <p className="project-detail-description">{project.description}</p>
        <div className="project-detail-image-container">
            <img src={project.image} alt={`${project.title} 이미지`} />
        </div>
        
        {/* This is where the generated content will go */}
        <div className="project-detail-content">
          <h3>상세 내용</h3>
          {project.details && (
            <div className="project-detail-text-content">
              {project.details.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ProjectDetail;
