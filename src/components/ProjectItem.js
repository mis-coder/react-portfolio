import React from "react";

const ProjectItem = ({ name, icon, demoUrl, sourceUrl }) => {
  const iconComponent = () => {
    const IconComponent = icon;
    return <IconComponent />;
  };
  return (
    <div className='project-item'>
      <div className='project-item-inner'>
        <h3 className='project-name'>{name}</h3>
        <a href={demoUrl} className='demo' target='_blank' rel='noreferrer'>
          Live Demo
        </a>
        <a
          href={sourceUrl}
          className='source-code'
          target='_blank'
          rel='noreferrer'
        >
          Source Code
        </a>
      </div>
      <div className='project-item-outer'>
        <div className='project-icon'>{iconComponent()}</div>
      </div>
    </div>
  );
};

export default ProjectItem;
