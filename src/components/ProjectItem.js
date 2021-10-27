import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyle = styled.div`
  .project__item__image {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .project__item__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .project__item__title {
    font-size: 2.2rem;
  }
  .project__item__description {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 769px) {
    .project__item__image {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  image = projectImg,
  title = 'Project Name',
  body = 'Description',
  link = '/projects',
}) {
  return (
    <ProjectItemStyle>
      {link === '/projects' ? (
        <Link to={link} className="project__item__image">
          <img src={image} alt="project Img" target="_blank" />
        </Link>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="project__item__image"
        >
          <img src={image} alt="project Img" target="_blank" />
        </a>
      )}
      <div className="project__item__info">
        {link === '/projects' ? (
          <Link to={link}>
            <h3 className="project__item__title">{title}</h3>
          </Link>
        ) : (
          <a href={link} target="_blank" rel="noreferrer">
            <h3 className="project__item__title">{title}</h3>
          </a>
        )}
        <p className="project__item__description">{body}</p>
      </div>
    </ProjectItemStyle>
  );
}
