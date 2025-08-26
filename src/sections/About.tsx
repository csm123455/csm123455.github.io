import React from 'react';
import profileImage from '../assets/images/facephoto.png';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">소개</h2>
        <div className="about-content">
          <div className="profile-card">
            <div className="profile-image">
              <img src={profileImage} alt="조성민 프로필 사진" />
            </div>
            <div className="profile-info">
              <h3>자기소개</h3>
              <p>안녕하세요! 도전과 성장을 좋아하는 조성민입니다.</p>
              <p>새로운 기술을 배우고자 하며, 협력과 소통을 중요한 코드를 작성하기 위해 노력합니다.</p>
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
