import TechSkills from '../TechSkills/TechSkills';
import SoftSkills from '../SoftSkills/SoftSkills';
import Languages from 'components/Languages';
import { SidebarList } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarList>
      <TechSkills />
      <SoftSkills />
      <Languages />
    </SidebarList>
  );
};

export default Sidebar;
