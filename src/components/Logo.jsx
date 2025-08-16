import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Logo = ({ to = "/dashboard" }) => {
  return (
    <Link
      to={to}
      aria-label="Go to home"
      className="inline-block focus:outline-none focus:ring"
    >
      <img src={logo} alt="JobFix logo" className="logo" />
    </Link>
  );
};

export default Logo;
