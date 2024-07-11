import { useEffect, useState } from "react";
import  logo from "../assets/Logo.png"

export const Header = () => {
  const[theme,setTheme ]=useState();
  
  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  },[theme]);

  console.log("logo", {logo}  )
  return (
    <header>
    <div className="logo">
      <img src={logo} alt="Taskmate Logo" />
      <span>To-do List</span>
    </div>
    <div className="themeSelector">
      <div className="themeButtons">
        <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
        <span onClick={() => setTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
        <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
        <span onClick={() => setTheme("gOne")} className={theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
        <span onClick={() => setTheme("gTwo")} className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
        <span onClick={() => setTheme("gThree")} className={theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
      </div>
    </div>
  </header>
  )  
}
export default Header;

