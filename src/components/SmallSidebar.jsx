import { useContext } from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import Navlink from "./Navlinks";

import { DashboardContext } from "../context/DashboardContext";

const SmallSidebar = () => {
  const { showSideBar, toggleSideBar } = useContext(DashboardContext);

  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSideBar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <Navlink />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
