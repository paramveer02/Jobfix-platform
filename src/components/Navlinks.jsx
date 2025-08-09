import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DashboardContext } from "../context/DashboardContext";
import links from "../utils/links";

const Navlinks = ({ isBigSidebar }) => {
  const { toggleSideBar } = useContext(DashboardContext);

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSideBar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default Navlinks;
