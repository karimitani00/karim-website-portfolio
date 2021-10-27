import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutSectionImage from '../assets/images/about-sec-img.png';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .about__section__left,
  .about__section__right {
    flex: 1;
  }
  .section__title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .about__section__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .about__section__image {
    border: 2px solid var(--gray-1);
  }
  @media only screen and (max-width: 950px) {
    .about__section__left {
      flex: 4;
    }
    .about__section__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .about__section__left,
    .about__section__right {
      width: 100%;
    }
    .about__section__right {
      margin-top: 3rem;
    }
    .section__title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .about__section__buttons {
      flex-direction: column;
      gap: 0;
      .button__wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="about__section__left">
          <SectionTitle subtitle="Let me" heading="Introduce Myself" />
          <PText>
            I am seeking early career opportunities in the high tech and
            consumer electronics industry utilizing my post graduate education
            and skillset in engineering based programming. I was born in Houston
            and raised in Massachussetts as a technology enthusiast, with a
            great passion in the outdoors and gaming.
          </PText>
          <div className="about__section__buttons">
            <Button btnLink="/projects" btnText="works" />
            <Button btnLink="/about" btnText="read more" outline />
          </div>
        </div>
        <div className="about__section__right">
          <img
            className="about__section__image"
            src={AboutSectionImage}
            alt=""
          />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
