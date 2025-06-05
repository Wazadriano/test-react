import { sidebarItems } from './SidebarConfig';
import SidebarItem from './SidebarItem';
import { useState } from 'react';
import logo from '/src/assets/Logo_Centralis.png';

const Sidebar = ({ userRole, notifications }) => {
  const items = sidebarItems[userRole] || [];
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="logo-section">
        <img src={logo} alt="Logo Centralis" className="logo-img" />
        {!collapsed && (
          <>
            <div className="logo-org">Organisme</div>
            <div className="logo-user">Nom Prénom</div>
          </>
        )}
        <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? '❯' : '❮'}
        </button>
      </div>


      <nav>
        {items.map((item, index) => {
          if (item.type === 'divider') return <hr key={index} />;
          return (
            <SidebarItem
              key={item.route}
              label={collapsed ? '' : item.label}
              icon={item.icon}
              route={item.route}
              notifCount={notifications?.[item.notifKey] || 0}
            />
          );
        })}
      </nav>

      <div className="bottom-menu">
        {!collapsed && (
          <>
            <SidebarItem label="Support/Aide" icon="❓" route="/aide" />
            <SidebarItem label="Déconnexion" icon="🚪" route="/logout" />
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
