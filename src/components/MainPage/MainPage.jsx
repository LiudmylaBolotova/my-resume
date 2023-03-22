import About from 'components/About';
import Education from 'components/Education';
import Experience from 'components/Experience';
import Languages from 'components/Languages';
import Projects from 'components/Projects';

import { Main } from './MainPage.styled';

const MainPage = () => {
  return (
    <Main>
      <About />
      <Education />
      <Experience />
      <Languages />
      <Projects />
    </Main>
  );
};

export default MainPage;
