import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .projects__all__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__search__bar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__search__bar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__search__bar .search__icon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__search__bar .search__icon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__search__bar,
    .projects__search__bar form,
    .projects__search__bar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };
  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle heading="Projects" subtitle="Explore my" />
          <div className="projects__search__bar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
              />
              <MdSearch className="search__icon" />
            </form>
          </div>
          <div className="projects__all__items">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                body={item.desc}
                image={item.img}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
}
