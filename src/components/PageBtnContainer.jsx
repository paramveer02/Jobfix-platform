import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useAllJobsContext } from "../pages/AllJobs";
import { useNavigate, useLocation } from "react-router-dom";

const PageBtnContainer = ({ currentPage, total }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchValues } = useAllJobsContext();

  const go = (p) => {
    const params = new URLSearchParams({ ...searchValues, page: String(p) });
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => go(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pages.map((p) => (
          <button
            key={p}
            className={`btn page-btn ${p === currentPage ? "active" : ""}`}
            onClick={() => go(p)}
          >
            {p}
          </button>
        ))}
        <button
          className="btn"
          onClick={() => go(Math.min(total, currentPage + 1))}
          disabled={currentPage === total}
        >
          Next
        </button>
      </div>
    </Wrapper>
  );
};

export default PageBtnContainer;
