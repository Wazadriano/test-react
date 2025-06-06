import React, { useState } from "react";
import {
  logo_centralis,
  dashboard,
  order,
  catalogue,
  account_circle,
  google_docs,
  help,
  logout,
} from "../../assets";

const Sidebar = ({ userRole = "admin", notifications = { dashboard: 4, commandes: 4 } }) => {
  const [collapsed, setCollapsed] = useState(false);

  const linksTop = [
    { label: "Dashboard", icon: dashboard, notifKey: "dashboard", route: "/" },
    { label: "Commandes", icon: order, notifKey: "commandes", route: "/commandes" },
    { label: "Annuaire", icon: catalogue, route: "/annuaire" },
  ];
  const linksMiddle = [
    { label: "Profil", icon: account_circle, route: "/profil" },
    { label: "Mes documents", icon: google_docs, route: "/documents" },
  ];
  const linksBottom = [
    { label: "Support/Aide", icon: help, route: "/aide" },
    { label: "Déconnexion", icon: logout, route: "/logout" },
  ];

  return (
    <aside style={{ ...styles.sidebar, width: collapsed ? "70px" : "250px" }}>
      <button onClick={() => setCollapsed(!collapsed)} style={styles.collapseBtn}>
        {collapsed ? "❯" : "❮"}
      </button>

      <div style={{ ...styles.logoBlock, justifyContent: collapsed ? "center" : "flex-start" }}>
        <img src={logo_centralis} alt="Logo Centralis" style={styles.logo} />
        {!collapsed && (
          <div>
            <div style={styles.org}>Organisme</div>
            <div style={styles.name}>Nom Prénom</div>
          </div>
        )}
      </div>

      <nav style={styles.nav}>
        {linksTop.map((link) => (
          <SidebarLink key={link.label} {...link} count={notifications[link.notifKey] || 0} collapsed={collapsed} />
        ))}

        <div style={styles.separator}></div>

        {linksMiddle.map((link) => (
          <SidebarLink key={link.label} {...link} collapsed={collapsed} />
        ))}

        <div style={styles.spacer}></div>

        {linksBottom.map((link) => (
          <SidebarLink key={link.label} {...link} collapsed={collapsed} />
        ))}
      </nav>
    </aside>
  );
};

const SidebarLink = ({ icon, label, route, count = 0, collapsed }) => (
  <div style={styles.link}>
    <img src={icon} alt={label} style={styles.iconImg} />
    {!collapsed && (
      <>
        <a href={route} style={styles.text}>{label}</a>
        {count > 0 && <span style={styles.badge}>{count}</span>}
      </>
    )}
  </div>
);

const styles = {
  sidebar: {
    background: "#fff",
    borderRight: "2px solid #2b3142",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    boxSizing: "border-box",
    fontFamily: "system-ui, sans-serif",
    position: "fixed",
    height: "100vh",
    zIndex: 1000,
    transition: "width 0.3s ease",
  },
  collapseBtn: {
    position: "absolute",
    top: "1rem",
    right: "-12px",
    backgroundColor: "#dd7025",
    border: "none",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
  },
  logoBlock: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    marginBottom: "2rem",
    transition: "justify-content 0.3s ease",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  org: {
    fontWeight: "bold",
    fontSize: "1rem",
  },
  name: {
    fontSize: "0.85rem",
    color: "#555",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    flexGrow: 1,
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    fontSize: "0.95rem",
    color: "#2b3142",
    textDecoration: "none",
    cursor: "pointer",
  },
  iconImg: {
    width: "22px",
    height: "22px",
  },
  text: {
    flexGrow: 1,
    textDecoration: "none",
    color: "#2b3142",
  },
  badge: {
    background: "#e63946",
    color: "white",
    borderRadius: "1rem",
    padding: "0.1rem 0.55rem",
    fontSize: "0.75rem",
    fontWeight: "bold",
  },
  separator: {
    borderTop: "1px solid #ccc",
    margin: "1rem 0",
  },
  spacer: {
    flexGrow: 1,
  },
};

export default Sidebar;
