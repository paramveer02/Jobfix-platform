import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <nav>NavBar</nav>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default HomeLayout;
