import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const useAuth = () => ({ role: "admin" });
const useNotifications = () => ({});

function AppLayout() {
  const user = useAuth();
  const notifications = useNotifications();

  return (
    <div className="layout">
      <Sidebar userRole={user.role} notifications={notifications} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
