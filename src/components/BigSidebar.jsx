import Wrapper from "../assets/wrappers/BigSidebar";
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

const BigSidebar = () => {
  const { showSideBar } = useContext(DashboardContext);

  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
