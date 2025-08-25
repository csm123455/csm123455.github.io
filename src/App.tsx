import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';
import { initialContent, ContentData } from './data/content';
import './styles/App.css';

function App() {
  const [content, setContent] = useState<ContentData>(() => {
    try {
      const savedContent = localStorage.getItem('portfolioContent');
      return savedContent ? JSON.parse(savedContent) : initialContent;
    } catch (error) {
      console.error("Could not parse localStorage content, using initial content.", error);
      return initialContent;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolioContent', JSON.stringify(content));
    } catch (error) {
      console.error("Could not save content to localStorage.", error);
    }
  }, [content]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage content={content} />} />
        <Route path="/edit" element={<EditPage content={content} setContent={setContent} />} />
      </Routes>
    </div>
  );
}

export default App;
