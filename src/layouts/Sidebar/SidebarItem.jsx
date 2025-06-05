import { NavLink } from 'react-router-dom';

const SidebarItem = ({ label, icon, route, notifCount }) => (
  <NavLink to={route} className={({ isActive }) => 'sidebar-item' + (isActive ? ' active' : '')}>
    <span className="icon">{icon}</span>
    <span className="label">{label}</span>
    {notifCount > 0 && <span className="notif">{notifCount}</span>}
  </NavLink>
);

export default SidebarItem;
