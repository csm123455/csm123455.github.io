import React from 'react';
import { ContentData } from '../data/content';
import { Link } from 'react-router-dom';

interface EditPageProps {
  content: ContentData;
  setContent: React.Dispatch<React.SetStateAction<ContentData>>;
}

const EditPage: React.FC<EditPageProps> = ({ content, setContent }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const [section, field, index, subfield] = name.split('.');

    if (section === 'projects' && index !== undefined && subfield !== undefined) {
      const projectIndex = parseInt(index, 10);
      const updatedProjects = [...content.projects];
      updatedProjects[projectIndex] = {
        ...updatedProjects[projectIndex],
        [subfield]: value,
      };
      setContent({ ...content, projects: updatedProjects });
    } else {
      setContent(prevContent => ({
        ...prevContent,
        [section]: {
          ...prevContent[section as keyof Omit<ContentData, 'projects'>],
          [field]: value,
        },
      }));
    }
  };

  return (
    <div className="edit-page">
      <div className="container">
        <h1>편집창</h1>
        <Link to="/">홈으로 돌아가기</Link>
        <form>
          <h2>Hero Section</h2>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="hero.title" value={content.hero.title} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Subtitle</label>
            <input type="text" name="hero.subtitle" value={content.hero.subtitle} onChange={handleChange} />
          </div>

          <h2>About Section</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="about.name" value={content.about.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Intro</label>
            <textarea name="about.intro" value={content.about.intro} onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="about.description" value={content.about.description} onChange={handleChange}></textarea>
          </div>

          <h2>Projects Section</h2>
          {content.projects.map((project, index) => (
            <div key={index}>
              <h3>Project {index + 1}</h3>
              <div className="form-group">
                <label>Title</label>
                <input type="text" name={`projects.${index}.title`} value={project.title} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name={`projects.${index}.description`} value={project.description} onChange={handleChange}></textarea>
              </div>
            </div>
          ))}
          
          <h2>Contact Section</h2>
          <div className="form-group">
            <label>Email</label>
            <input type="text" name="contact.email" value={content.contact.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>GitHub</label>
            <input type="text" name="contact.github" value={content.contact.github} onChange={handleChange} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
