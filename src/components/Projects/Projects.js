import React from 'react';
import Project from './Card';
import './Projects.css'; // Create a CSS file for styling

function Projects() {
  return (
    <div className="projects-container">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
}

export default Projects;