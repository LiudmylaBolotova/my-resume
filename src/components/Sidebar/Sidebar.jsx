import TechSkills from '../TechSkills/TechSkills';
import SoftSkills from '../SoftSkills/SoftSkills';
import { SidebarList } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarList>
      <TechSkills />
      <SoftSkills />
    </SidebarList>
  );
};

export default Sidebar;
