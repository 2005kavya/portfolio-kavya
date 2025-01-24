// src/components/Projects.js
import React from 'react';
import '../index.css'; // We'll create a new CSS file for styling

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {/* First Project Container */}
        <div className="project-container">
          <h3>Revolutionizing the Food Supply Chain to Combat Food Waste</h3>
          <p>
            This project focused on optimizing the food supply chain using data-driven strategies to reduce food waste.
            We collaborated with stakeholders to design solutions, including surplus redistribution, that made the supply chain more sustainable and efficient.
            The impact was significant, reducing waste and improving overall distribution efficiency.
          </p>
          <ul>
            <li>Project type: Supply Chain Optimization</li>
            <li>Technologies used: Python, Machine Learning, Data Analytics</li>
            <li>Result: Reduced food waste by 25%</li>
          </ul>
        </div>
        
        {/* Second Project Container */}
        <div className="project-container">
          <h3>AI-Based Animal Species Prediction System</h3>
          <p>
            In this project, we developed a machine learning model that predicts the species of animals based on environmental factors. This tool helps conservationists monitor wildlife and make better decisions regarding species protection.
            The model provides real-time predictions for wildlife monitoring systems, contributing to better conservation efforts.
          </p>
          <ul>
            <li>Project type: Machine Learning for Wildlife Conservation</li>
            <li>Technologies used: Python, TensorFlow, Data Science</li>
            <li>Result: Enhanced wildlife monitoring system</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
