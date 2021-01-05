import React from "react";
import styled, { keyframes } from "styled-components";

const fillCircle = keyframes`
 0%{
   stroke-dashoffset: ${2 * 3.14 * 90};
 } 
 100%{
   stroke-dashoffset: ${(props) => props.strokeDash} ;
 }
`;
const ProgressCircle = styled.svg`
  & .svg-circle {
    animation: ${fillCircle} 6s linear forwards;
  }
`;
const SkillItem = ({ skillName, percent }) => {
  const c = "150";
  const r = "90";
  const p = 2 * 3.14 * r;
  const strokeDash = `calc(${p} - (${p} * ${percent}) / 100)`;
  return (
    <div className='skill-item'>
      <ProgressCircle className='svg' strokeDash>
        <circle cx={c} cy={c} r={r} />
        <circle
          className='svg-circle'
          cx={c}
          cy={c}
          r={r}
          strokeDashoffset={strokeDash}
          strokeDasharray={p}
        />
        <circle cx={c} cy={c} r={r - 10} />
      </ProgressCircle>
      <div className='skill-name'>
        <h3>{skillName}</h3>
      </div>
    </div>
  );
};

export default SkillItem;
