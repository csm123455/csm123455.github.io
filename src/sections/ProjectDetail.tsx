import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

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
            <img src={project.imageUrl} alt={`${project.title} 이미지`} />
        </div>
        
        {/* This is where the generated content will go */}
        <div className="project-detail-content">
          <h3>상세 내용</h3>
          {project.details ? (
            <div dangerouslySetInnerHTML={{ __html: project.details }} />
          ) : (
            <p>상세 내용을 준비 중입니다...</p>
          )}
        </div>

      </div>
    </section>
  );
};

export default ProjectDetail;
