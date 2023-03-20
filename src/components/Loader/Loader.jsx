import { RotatingLines } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <RotatingLines strokeColor="grey" height="90" width="90" />
    </StyledLoader>
  );
};

export default Loader;
