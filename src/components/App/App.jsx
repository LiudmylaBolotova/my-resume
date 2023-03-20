import Loader from 'components/Loader';
import Header from '../Header/Header';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header />
      <Loader/>
    </Container>
  );
};
