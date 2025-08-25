import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">프로젝트</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="editable" data-field="project1-title">
              프로젝트 1
              <button className="edit-btn">편집</button>
            </h3>
            <p className="editable" data-field="project1-desc">
              간단한 설명이 들어갑니다.
              <button className="edit-btn">편집</button>
            </p>
          </div>
          <div className="project-card">
            <h3 className="editable" data-field="project2-title">
              프로젝트 2
              <button className="edit-btn">편집</button>
            </h3>
            <p className="editable" data-field="project2-desc">
              간단한 설명이 들어갑니다.
              <button className="edit-btn">편집</button>
            </p>
          </div>
          <div className="project-card">
            <h3 className="editable" data-field="project3-title">
              프로젝트 3
              <button className="edit-btn">편집</button>
            </h3>
            <p className="editable" data-field="project3-desc">
              간단한 설명이 들어갑니다.
              <button className="edit-btn">편집</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
