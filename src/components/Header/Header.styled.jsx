import styled from 'styled-components';


export const StyledHeader = styled.header`
display: flex;
  width: 100%;
  /* height: ${p => p.theme.sizes.height[2]}px; */
  background-color: ${p => p.theme.colors.backgroundColor};
  border: ${p => p.theme.borders.normal};
  box-shadow: 0px 5px 12px -5px;
  background-color: ${p => p.theme.colors.twoBackgroundColor};
`;

export const Card = styled.div`
  width: ${p => p.theme.sizes.width[4]}px;
  /* margin-left: ${p => p.theme.space[4]}px; */
`;

export const SecondaryTitle = styled.h3`
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
  /* display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[7]}px; */
`;

export const ItemContact = styled.li`
 list-style: none;
`;


export const MyContact = styled.a`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: gray;
`;