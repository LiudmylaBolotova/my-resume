import styled from 'styled-components';

export const TertiaryTitle = styled.h3`
  color: ${p => p.theme.colors.twoText};
`;

export const StyledSection = styled.section`
  margin-right: ${p => p.theme.space[5]}px;
  margin-left: ${p => p.theme.space[5]}px;
 
  border-bottom: ${p => p.theme.borders.normal};
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.text};
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: ${p => p.theme.space[7]}px;
`;