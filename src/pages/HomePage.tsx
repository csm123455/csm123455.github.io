import React from 'react';
import Header from '../components/Header';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import { ContentData } from '../data/content';

interface HomePageProps {
  content: ContentData;
}

const HomePage: React.FC<HomePageProps> = ({ content }) => {
  return (
    <>
      <Header />
      <main>
        <Hero data={content.hero} />
        <About data={content.about} />
        <Projects data={content.projects} />
        <Contact data={content.contact} />
      </main>
    </>
  );
};

export default HomePage;
