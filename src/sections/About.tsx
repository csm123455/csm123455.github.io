import React from 'react';

interface AboutProps {
  data: {
    name: string;
    intro: string;
    description: string;
  };
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">소개</h2>
        <div className="about-content">
          <div className="profile-card">
            <div className="profile-image"></div>
            <div className="profile-info">
              <h3>{data.name}</h3>
              <p>{data.intro}</p>
              <p>{data.description}</p>
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