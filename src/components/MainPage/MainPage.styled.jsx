import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  width: 60%;
  border-right: ${p => p.theme.borders.normal};
`;
