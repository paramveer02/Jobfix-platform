// components/JobsContainer.jsx
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "../components/PageBtnContainer";
import { useAllJobsContext } from "../pages/AllJobs";
import Job from "./Job";

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs, totalJobs, numOfPages, page } = data;

  if (!jobs || jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{totalJobs === 1 ? "" : "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
      {numOfPages > 1 && (
        <PageBtnContainer currentPage={page} total={numOfPages} />
      )}
    </Wrapper>
  );
};
export default JobsContainer;
