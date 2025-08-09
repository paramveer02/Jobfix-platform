import { createContext, useState } from "react";
import { checkDefaultTheme } from "../App";

export const DashboardContext = createContext();

const DashboardContextProvider = ({ children }) => {
  // temp:
  const user = { name: "Param" };

  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSideBar = () => {
    console.log(`Show side bar: ${showSideBar}`);
    setShowSideBar((prev) => !prev);
  };

  const logoutUser = () => {
    console.log("Logged Out!");
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
