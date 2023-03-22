import styled from 'styled-components';

export const TertiaryTitle = styled.h3`
  color: ${p => p.theme.colors.twoText};
`;

export const StyledSection = styled.section`
  margin-right: ${p => p.theme.space[5]}px;
  margin-left: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[7]}px;
  border-bottom: ${p => p.theme.borders.normal};
`;

export const ListSkills = styled.ul`
  margin-bottom: 0;
  padding: 0;
`;

export const Text = styled.li`
  list-style: none;
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.text};
  margin-top: 0;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
