import { Link } from 'react-dom';
import {
  TertiaryTitle,
  SecondaryText,
  StyledSection,
  Text,
} from './Projects.styled';

const Projects = () => {
  return (
    <StyledSection>
      <TertiaryTitle>Projects</TertiaryTitle>
      <SecondaryText>My resume</SecondaryText>
      <Text>
        The summary is written using technologies and libraries: HTML, React,
        Styled-components, React-icons, React-loader-spinner.
      </Text>
      
      <SecondaryText>Filmoteka</SecondaryText>
      <Text>
        Participation in a team project to find films and add favorite films to
        the client's personal library. My work is a header. Using pure JS, npm
        packages and SCSS.
      </Text>
      
      <SecondaryText>Phone book</SecondaryText>
      <Text>
        I have used HTML, Styled-components, React, reduxjs/toolkit,
        redux-persist, Redux, Axios.
      </Text>
      
    </StyledSection>
  );
};

export default Projects;
