import photoResume from '../Images/photoResume.jpg';
import {
  StyledHeader,
  BlockInfo,
  Title,
  Card,
  SecondaryTitle,
  MyPhoto,
  ListContacts,
  StyledHiOutlinePhone,
  StyledHiOutlineMail,
  ItemContact,
  MyContact,
  StyledLinks,
  StyledLinkItem,
} from './Header.styled';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { GrGithub, GrLinkedin } from 'react-icons/gr';

const Header = () => {
  return (
    <StyledHeader>
      <Card>
        <MyPhoto src={photoResume} alt="photo" />
      </Card>
      <BlockInfo>
        <div>
          <Title>Liudmyla Bolotova</Title>
          <SecondaryTitle>Junior Front-end developer</SecondaryTitle>
        </div>
        <ListContacts>
          <ItemContact>
            <MyContact>
              <StyledHiOutlinePhone>
                <HiOutlinePhone />
              </StyledHiOutlinePhone>
              +380993544316
            </MyContact>
          </ItemContact>
          <ItemContact>
            <MyContact>
              <StyledHiOutlineMail>
                <HiOutlineMail />
              </StyledHiOutlineMail>
              liudmylabolotova@gmail.com
            </MyContact>
          </ItemContact>
        </ListContacts>

        
          <nav>
            <StyledLinks>
              <StyledLinkItem>
                <a
                  href="https://github.com/liudmylabolotova"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrGithub color="white" size="40" />
                </a>
              </StyledLinkItem>
              <StyledLinkItem>
                <a
                  href="https://www.linkedin.com/in/liudmyla-bolotova-441709224/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrLinkedin color="white" size="40" />
                </a>
              </StyledLinkItem>
            </StyledLinks>
          </nav>
       
      </BlockInfo>
    </StyledHeader>
  );
};

export default Header;
