import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      style={{ marginTop: 15, marginRight: 20, cursor: "pointer" }}
    >
      <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} size="2x" />
    </div>
  );
}
