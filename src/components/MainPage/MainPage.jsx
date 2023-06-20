import About from 'components/About';
import Education from 'components/Education';
import Experience from 'components/Experience';
import Projects from 'components/Projects';

import { Main } from './MainPage.styled';

const MainPage = () => {
  return (
    <Main>
      <About />
      <Projects />
      <Experience />
      <Education />
    </Main>
  );
};

export default MainPage;
