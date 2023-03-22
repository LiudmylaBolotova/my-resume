import {
  StyledSection,
  TertiaryTitle,
  ListSkills,
  Text,
} from './TechSkills.styled';
const TechSkills = () => {
  return (
    <StyledSection>
      <TertiaryTitle>Tech Skills</TertiaryTitle>
      <ListSkills>
        <Text>HTML5</Text>
        <Text>CSS3</Text>
        <Text>SASS</Text>
        <Text>JavaScript</Text>
        <Text>React</Text>
        <Text>Redux</Text>
        <Text>GIT</Text>
        <Text>REST API</Text>
        <Text>Figma</Text>
        <Text>Scrum</Text>
      </ListSkills>
    </StyledSection>
  );
};

export default TechSkills;
