import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Bicycle rights heirloom +1 cupping butcher tbh shaman listicle tilde
            tote bag stumptown. Solarpunk hell of raclette cardigan typewriter
            listicle jean shorts williamsburg edison bulb poke cray gatekeep
            praxis bushwick 90's. Salvia gatekeep live-edge normcore cornhole
            schlitz. Kickstarter fashion axe Brooklyn disrupt big mood jean
            shorts ennui hot chicken vegan ascot migas iceland ethical messenger
            bag meditation.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="main image" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
