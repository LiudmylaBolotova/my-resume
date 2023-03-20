import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 850px;
  margin: auto;
  box-shadow: 0px 5px 12px -5px;
  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;