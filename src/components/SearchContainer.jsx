// components/SearchContainer.jsx
import { FormRow, FormRowSelect } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from "../utils/constants";
import { useAllJobsContext } from "../pages/AllJobs";

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const {
    search = "",
    jobStatus = "all",
    jobType = "all",
    sort = "newest",
  } = searchValues;

  const submit = useSubmit();
  const location = useLocation();

  // debounce for text input
  const timeoutRef = useRef(null);
  const handleTextChange = (e) => {
    const form = e.currentTarget.form;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      // replace avoids history spam when typing
      submit(form, { replace: true, method: "get" });
    }, 500);
  };
  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  // selects can submit immediately (cheap)
  const submitNow = (e) =>
    submit(e.currentTarget.form, { replace: true, method: "get" });

  return (
    <Wrapper>
      {/* key forces a remount whenever the querystring changes so defaultValue re-applies */}
      <Form className="form" method="get" key={location.search} replace>
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            defaultValue={search}
            onChange={handleTextChange}
          />
          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={submitNow}
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            onChange={submitNow}
          />
          <FormRowSelect
            name="sort"
            list={[...Object.values(JOB_SORT_BY)]}
            defaultValue={sort}
            onChange={submitNow}
          />

          {/* Reset to the same path with no querystring */}
          <Link to={location.pathname} className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
