import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac, MdBuild, MdCode } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import SkillsSectionItem from './SkillsSectionItem';

const SkillsSectionStyle = styled.div`
  padding: 10rem 0;
  .skills__all__items {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .skills__all__items {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function SkillsSection() {
  return (
    <SkillsSectionStyle>
      <div className="container">
        <SectionTitle heading="Computer Skills" subtitle="" />
        <div className="skills__all__items">
          <SkillsSectionItem
            icon={<MdDesktopMac />}
            title="Frontend/Backend Programming"
            body="I have experience with android, react, html and css programming. My
          knowledge in android programming was learned in a classroom, whereas
          my web development skills are all self-taught. "
          />
          <SkillsSectionItem
            icon={<MdCode />}
            title="Aritificial Intelligence"
            body="I have studied machine learning and deep learning in an academic setting and am very familiar with PyToch and SKLearn. Tasks include but are not limited to image/video classification and text generation."
          />
          <SkillsSectionItem
            icon={<MdBuild />}
            title="Robotics"
            body="I have studied Robotics in an academic setting -- related coursework includes general robotics, multirobot systems and robotic perception systems. I have also spent time researching robotics in a formal research setting."
          />
        </div>
      </div>
    </SkillsSectionStyle>
  );
}
