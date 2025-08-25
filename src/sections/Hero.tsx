import React from 'react';

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;