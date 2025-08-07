import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Paramvir" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="Marwah"
        />
        <FormRow type="text" name="location" defaultValue="India" />
        <FormRow type="text" name="email" defaultValue="param@test.com" />
        <FormRow type="password" name="password" defaultValue="user123!" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
