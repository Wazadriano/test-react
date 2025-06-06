import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

const useAuth = () => ({ role: "admin" });
const useNotifications = () => ({});

const layoutStyle = `
.layout {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  padding: 2rem;
}
`;

function AppLayout() {
  const user = useAuth();
  const notifications = useNotifications();

  return (
    <div className="layout">
      <style>{layoutStyle}</style>
      <Sidebar user={user} notifications={notifications} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}


export default AppLayout;
