import React from "react";
import "../styles/Skills.css";
import SkillItem from "./SkillItem";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      percent: 90,
    },
    {
      name: "CSS3",
      percent: 80,
    },
    {
      name: "JAVASCRIPT",
      percent: 75,
    },
    {
      name: "BOOTSTRAP",
      percent: 80,
    },
    {
      name: "REACTJS",
      percent: 60,
    },
    {
      name: "FIGMA",
      percent: 70,
    },
  ];
  return (
    <div className='section' id='skills'>
      <div className='skillset'>
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            skillName={skill.name}
            percent={skill.percent}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
