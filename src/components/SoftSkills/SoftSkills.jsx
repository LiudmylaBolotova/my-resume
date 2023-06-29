import {
  StyledSection,
  TertiaryTitle,
  ListSkills,
  Text,
} from './SoftSkills.styled';

const SoftSkills = () => {
  return (
    <StyledSection>
      <TertiaryTitle>Soft Skills</TertiaryTitle>
      <ListSkills>
        <Text>Motivation and responsibility</Text>
        <Text>Ability to work on a team and independently</Text>
        <Text>Ability to search and analyze information</Text>
        <Text>Willingness and desire to develop</Text>
        <Text>Ability to work on mistakes</Text>
      </ListSkills>
    </StyledSection>
  );
};

export default SoftSkills;
