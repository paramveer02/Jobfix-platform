import { Form, useNavigation, useOutletContext } from "react-router-dom";
import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/AddJob";

const AddJob = () => {
  const { user } = useOutletContext();
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Add Job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            defaultValue={user.location}
          />
        </div>
      </Form>
      <button
        type="submit"
        className="btn btn-block form-btn  "
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting..." : "submit"}
      </button>
    </Wrapper>
  );
};
export default AddJob;
