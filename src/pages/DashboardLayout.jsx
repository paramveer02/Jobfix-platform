import { Outlet } from "react-router-dom";
import { BigSidebar, SmallSidebar, Navbar } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";
import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

const Dashboard = () => {
  const { user, isDarkTheme, showSideBar, toggleDarkTheme, toggleSideBar } =
    useContext(DashboardContext);

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Dashboard;
