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
            Stop losing track of applications in spreadsheets and tabs.{" "}
            <span className="accent">JobFix</span> keeps your entire search in
            one simple <span className="accent">pipeline</span>—every role,
            status, date, and note. See at a glance what’s{" "}
            <span className="accent">pending</span>, what’s{" "}
            <span className="accent">scheduled</span>, and what needs{" "}
            <span className="accent">follow-up</span>. Quick{" "}
            <span className="accent">search & filters</span> help you find
            anything fast. Your dashboard turns activity into insight with
            monthly trends and clear <span className="accent">charts</span>, so
            you can spot momentum and double down on what works. Whether you’re
            a student or a seasoned pro, JobFix makes the hunt{" "}
            <span className="accent">organized</span>,{" "}
            <span className="accent">measurable</span>, and{" "}
            <span className="accent">stress-free</span>—so your next offer is a{" "}
            <span className="accent">plan</span>, not a guess.
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
