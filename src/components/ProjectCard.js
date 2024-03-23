import React, { useState } from 'react';

const ProjectCard = ({ image, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const truncatedDescription = description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <div className="project-card">
      <img src={image} alt={title} id='card_img'/>
      <h3>{title}</h3>
      <p>{expanded ? description : truncatedDescription}</p>
      {description.length > 100 && (
        <span onClick={toggleExpansion} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          {expanded ? 'See Less' : 'See More'}
        </span>
      )}
    </div>
  );
};

export default ProjectCard;
