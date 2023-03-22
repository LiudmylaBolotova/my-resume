import styled from 'styled-components';

export const TertiaryTitle = styled.h3`
  color: ${p => p.theme.colors.twoText};
`;

export const StyledSection = styled.section`
  margin-right: ${p => p.theme.space[5]}px;
  margin-left: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[7]}px;
`;

export const SecondaryText = styled.p`
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.twoText};
  margin-top: 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.text};
  margin-top: 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ListProjects = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const LinkProject = styled.a`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: 24px;

  color: ${p => p.theme.colors.accent};
`;

export const ItemProject = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:hover,
  :focus {
    border-bottom: ${p => p.theme.borders.twoLinkBottom};
  }
`;
