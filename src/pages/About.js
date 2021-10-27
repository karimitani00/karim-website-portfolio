import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 10rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 5rem;
  }
  .about__info__item {
    margin-bottom: 5rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                I am <span>Karim Itani</span>,
              </p>
              <h2 className="about__heading">A Software Engineer</h2>
              <div className="about__info">
                <PText>
                  From Westwood, Massachussetts. I was originaly born in
                  Houston, Texas, but have been living in Massachussetts since I
                  was a small child.
                  <br />
                  <br />
                  I first began coding in High School, but began to take it more
                  seriously as an undergraduate at Dartmouth College. During my
                  time finishing my undergraduate degree, I found that
                  Engineering was not what I thought it would be. It was neither
                  as creative, nor as project-based as I expected. As a result,
                  I decided to continue my education, and complete my Master's
                  in Computer Science. I am currently looking for Software
                  Engineering jobs in high tech and consumer electronics.
                  <br />
                  <br />
                  During my free time I enjoy spending my time outdoors,
                  specfically, climbing, skiing, and skateboarding. I am also an
                  avid gamer and speak English and Arabic fluently.
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Undergraduate"
                items={['BA in Engineering, Dartmouth College']}
              />
              <AboutInfoItem
                title="Graduate"
                items={['MS in Computer Science, Dartmouth College']}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
