import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="editable" data-field="hero-title">
            안녕하세요, 도전과 성장을 좋아하는 김멋사입니다.
            <button className="edit-btn">편집</button>
          </h1>
          <p className="editable" data-field="hero-subtitle">
            웹 개발과 디자인에 열정을 가지고 있습니다
            <button className="edit-btn">편집</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
