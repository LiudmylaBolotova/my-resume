import photoResume from '../Images/photoResume.jpg';
import {
  StyledHeader,
  Card,
    SecondaryTitle,
    MyPhoto,
    ListContacts,
  ItemContact,
  MyContact,
} from './Header.styled';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const Header = () => {
  return (
    <StyledHeader>
      <Card>
        <MyPhoto src={photoResume} alt="photo" />
      </Card>
      <div>
        <h1>Liudmyla Bolotova</h1>
        <SecondaryTitle>Junior Front-end developer</SecondaryTitle>
      </div>
      <ListContacts>
        <ItemContact>
          <MyContact href="tel:+380993544316">
            <HiOutlinePhone />
            +380993544316
          </MyContact>
        </ItemContact>
        <ItemContact>
          <MyContact href="mailto:liudmylabolotova@gmail.com">
            <HiOutlineMail />
            liudmylabolotova@gmail.com
          </MyContact>
        </ItemContact>
      </ListContacts>
    </StyledHeader>
  );
};

export default Header;
