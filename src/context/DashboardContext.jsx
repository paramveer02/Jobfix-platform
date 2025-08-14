import { createContext, useState } from "react";
import { checkDefaultTheme } from "../App";
import { useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const DashboardContext = createContext();

const DashboardContextProvider = ({ children, initialUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(initialUser);
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  useEffect(() => {
    setUser(initialUser);
  }, [initialUser]);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSideBar = () => {
    setShowSideBar((prev) => !prev);
  };

  const logoutUser = async () => {
    try {
      await customFetch.get("/auth/logout");
    } catch {}
    setUser(null);
    toast.success("Logged Out Successfully");
    navigate("/");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        isDarkTheme,
        showSideBar,
        toggleDarkTheme,
        toggleSideBar,
        logoutUser,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
export default DashboardContextProvider;
