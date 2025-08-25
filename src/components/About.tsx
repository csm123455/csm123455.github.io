import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">소개</h2>
        <div className="about-content">
          <div className="profile-card">
            <div className="profile-image"></div>
            <div className="profile-info">
              <h3 className="editable" data-field="name">
                자기소개
                <button className="edit-btn">편집</button>
              </h3>
              <p className="editable" data-field="intro">
                안녕히세요! 도전과 성장을 좋아하는 김멋사입니다.
                <button className="edit-btn">편집</button>
              </p>
              <p className="editable" data-field="description">
                새로운 기술을 배우고자 하며, 협력과 소통을 중요한 코드를 작성하기 위해 노력합니다.
                <button className="edit-btn">편집</button>
              </p>
              <div className="skills">
                <div className="skill-icon" title="HTML">H</div>
                <div className="skill-icon" title="CSS">C</div>
                <div className="skill-icon" title="JavaScript">J</div>
                <div className="skill-icon" title="Settings">⚙</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
