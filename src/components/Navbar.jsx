import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./Themetoggle";

const Navbar = () => {
  const { user, showSideBar, toggleSideBar } = useContext(DashboardContext);

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">Dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
