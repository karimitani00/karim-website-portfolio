import React from 'react';
import { MdDesktopMac, MdBuild, MdCode } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const SkillsItemStyle = styled.div`
  text-align: center;
  .skills__item__icon {
    svg {
      width: 3rem;
    }
  }
  .skills__item__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function SkillsSectionItem({
  icon = <MdDesktopMac />,
  title = 'Title',
  body = 'Body',
}) {
  return (
    <SkillsItemStyle>
      <div className="skills__item__icon">
        {icon}
        <div className="skills__item__title">{title}</div>
        <PText>{body}</PText>
      </div>
    </SkillsItemStyle>
  );
}
