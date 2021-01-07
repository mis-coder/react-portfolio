import React from "react";
import "../styles/Projects.css";
import ProjectItem from "./ProjectItem";
import { FaGithubAlt } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
const Projects = () => {
  const projects = [
    {
      name: "Search Github Users",
      demoUrl: "https://find-githubusers.netlify.app/",
      sourceUrl: "https://github.com/mis-coder/search-github-users",
      icon: FaGithubAlt,
    },
    {
      name: "Food Recipes",
      demoUrl: "https://mis-coder.github.io/Food-Recipes/",
      sourceUrl: "https://github.com/mis-coder/Food-Recipes",
      icon: FaHamburger,
    },
    {
      name: "React Portfolio",
      demoUrl: "https://mis-coder.github.io/react-portfolio/",
      sourceUrl: "https://github.com/mis-coder/react-portfolio",
      icon: FaUserCircle,
    },
  ];
  return (
    <div className='section' id='projects'>
      <div className='projectset'>
        {projects.map((item, index) => (
          <ProjectItem
            key={index}
            name={item.name}
            icon={item.icon}
            demoUrl={item.demoUrl}
            sourceUrl={item.sourceUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
