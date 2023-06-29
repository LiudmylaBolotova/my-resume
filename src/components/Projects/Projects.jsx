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
            href="https://github.com/LiudmylaBolotova/goit-react-hw-08-phonebook"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SecondaryText>Phone Book</SecondaryText>
            <Text>
              The phone book has the functionality of registration, login and
              password. Used React, Redux-Toolkit, Redux Persist, Axios,
              Styled-components.
            </Text>
          </LinkProject>
        </ItemProject>

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
            href="https://github.com/LiudmylaBolotova/synoptic-news"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SecondaryText>Synoptic News</SecondaryText>
            <Text>
              This is an application for finding the weather forecast in any
              location. The user has access to the forecast for today, the next
              3 days and the hourly forecast for 3 days. I have used HTML,
              React, Axios, Styled-components, React-hot-toast, React-icons,
              React-loader-spinner.
            </Text>
          </LinkProject>
        </ItemProject>

        <ItemProject>
          <LinkProject
            href="https://github.com/LiudmylaBolotova/goit-react-hw-05-movies"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SecondaryText>Search movies</SecondaryText>
            <Text>
              This application has created a basic routing for finding and
              storing movies. https://www.themoviedb.org/ was used as a backend.
              The following functionality has been implemented: 1. a list of the
              most popular films for today to create a collection on the main
              page; 2. search for a movie by keyword on the movie page; 3.
              requesting complete information about the movie for the movie
              page; 4. requesting information about the cast for the movie page;
              5. requesting reviews for the movie page. Used React,
              React-router-dom, Axios, Styled-components, React.lazy and
              Suspense.
            </Text>
          </LinkProject>
        </ItemProject>

        <ItemProject>
          <LinkProject
            href="https://github.com/LiudmylaBolotova/goit-react-hw-04-images"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SecondaryText>Image search</SecondaryText>
            <Text>
              This is an image search application by keyword. I used the public
              service https://pixabay.com/api/docs/. Implemented a modal window
              with a "Big Card", pagination and a "Load more" button. The
              application is written on hooks, the "State Machine" technology is
              applied.
            </Text>
          </LinkProject>
        </ItemProject>
      </ListProjects>
    </StyledSection>
  );
};

export default Projects;
