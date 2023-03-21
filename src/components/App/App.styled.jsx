import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  width: ${p => p.theme.sizes.width[6]}px;
  margin: auto;
  box-shadow: 0px 5px 12px -5px;
  background-color: ${p => p.theme.colors.backgroundColor};
`;