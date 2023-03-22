import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;

  text-align: center;
  width: 100%;

  border: ${p => p.theme.borders.normal};

  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;

export const BlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${p => p.theme.space[7]}px;
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.accent};
`;

export const Card = styled.div`
  width: ${p => p.theme.sizes.width[4]}px;
  background-color: ${p => p.theme.colors.accent};
  border: ${p => p.theme.borders.card};
`;

export const SecondaryTitle = styled.h2`
  color: ${p => p.theme.colors.accent};
`;

export const MyPhoto = styled.img`
  display: block;
  margin: 0;

  max-width: 100%;
  height: auto;
  background-position: center;
`;

export const ListContacts = styled.ul`
  padding: 0;
`;

export const ItemContact = styled.li`
  list-style: none;
  width: 210px;
`;

export const StyledHiOutlinePhone = styled.span`
  margin-top: ${p => p.theme.space[2]}px;
  margin-right: ${p => p.theme.space[3]}px;
`;

export const StyledHiOutlineMail = styled.span`
  margin-top: ${p => p.theme.space[2]}px;
  margin-right: ${p => p.theme.space[3]}px;
`;

export const MyContact = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: 24px;

  color: ${p => p.theme.colors.accent};
  &:hover,
  :focus {
    border-bottom: ${p => p.theme.borders.linkBottom};
  }
`;

export const StyledLinks = styled.ul`
  display: flex;
  padding: 0;
`;

export const StyledLinkItem = styled.li`
  list-style: none;
  &:first-child {
    margin-right: 20px;
  }
`;
