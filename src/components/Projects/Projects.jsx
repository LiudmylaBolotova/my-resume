import {
  TertiaryTitle,
  SecondaryText,
  StyledSection,
  Text,
  ListProjects,
  LinkProject,
  ItemProject,
} from './Projects.styled';

const Projects = () => {
  return (
    <StyledSection>
      <ListProjects>
        <TertiaryTitle>Projects</TertiaryTitle>
        <ItemProject>
          <LinkProject
            href="https://github.com/LiudmylaBolotova/my-resume"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SecondaryText>My resume</SecondaryText>
            <Text>
              The summary is written using technologies and libraries: HTML,
              React, Styled-components, React-icons, React-loader-spinner.
            </Text>
          </LinkProject>
        </ItemProject>

        <ItemProject>
          <LinkProject
            href="https://github.com/LiudmylaBolotova/Filmoteka-project"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SecondaryText>Filmoteka</SecondaryText>
            <Text>
              Participation in a team project to find films and add favorite
              films to the client's personal library. My work is a header. Using
              pure JS, npm packages and SCSS.
            </Text>
          </LinkProject>
        </ItemProject>

        <ItemProject>
          <LinkProject
            href="https://github.com/LiudmylaBolotova/goit-react-hw-08-phonebook"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SecondaryText>Phone book</SecondaryText>
            <Text>
              I have used HTML, Styled-components, React, reduxjs/toolkit,
              redux-persist, Redux, Axios.
            </Text>
          </LinkProject>
        </ItemProject>
      </ListProjects>
    </StyledSection>
  );
};

export default Projects;
