import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo editable" data-field="logo">포트폴리오 과제</div>
          <ul className="nav-links">
            <li><a href="#home">홈</a></li>
            <li><a href="#about">소개</a></li>
            <li><a href="#projects">프로젝트</a></li>
            <li><a href="#contact">연락처</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
