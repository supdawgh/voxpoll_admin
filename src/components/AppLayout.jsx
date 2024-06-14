import "../styles/dashboard.css";
import Sidebar from "./Sidebar";

import Profile from "./Profile";

function AppLayout({ children }) {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        {children}
        <Profile />
      </div>
    </div>
  );
}

export default AppLayout;
