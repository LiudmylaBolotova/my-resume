// import Loader from 'components/Loader';
import Header from '../Header/Header';
import MainPage from 'components/MainPage';

import Footer from 'components/Footer';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header />
      <MainPage />
      
      <Footer/>
      {/* <Loader/> */}
    </Container>
  );
};
