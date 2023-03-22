import Header from '../Header/Header';
import MainPage from 'components/MainPage';
import Footer from 'components/Footer';
import { Container } from './App.styled';
import Sidebar from 'components/Sidebar';

export const App = () => {
  return (
    <Container>
      <Header />
      <MainPage />
      <Sidebar />
      <Footer />
    </Container>
  );
};
