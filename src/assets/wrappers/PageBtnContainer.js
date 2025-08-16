import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;

  .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    flex-wrap: wrap;
  }

  .page-btn {
    background: transparent;
    border: none;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--primary-500);
    border-radius: var(--border-radius);
    cursor: pointer;
  }

  .page-btn:hover {
    background: var(--primary-100);
  }

  .active {
    background: var(--primary-500);
    color: var(--white);
  }

  .prev-btn,
  .next-btn {
    background: var(--background-secondary-color);
    border: none;
    border-radius: var(--border-radius);
    width: 100px;
    height: 40px;
    color: var(--primary-500);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-500);
    color: var(--white);
    transition: var(--transition);
  }

  .prev-btn:disabled,
  .next-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Wrapper;
