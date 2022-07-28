import { NavLink } from "react-router-dom";
import { HeaderColorBar, HeaderLogo, HeaderLink } from "./StyledComponents";
import ThemeToggle from "./ThemeToggle";

function styleByActiveStatus(isActive) {
  return isActive
    ? { fontWeight: "bold", textDecoration: "none" }
    : { fontWeight: "normal", textDecoration: "none" };
}

export default function AppHeader() {
  return (
    <>
      <HeaderColorBar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <HeaderLogo>HappyCards</HeaderLogo>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <NavLink
              to="/"
              style={({ isActive }) => styleByActiveStatus(isActive)}
            >
              <HeaderLink>Home</HeaderLink>
            </NavLink>
            <NavLink
              to="/card-builder"
              style={({ isActive }) => styleByActiveStatus(isActive)}
            >
              <HeaderLink>Card Builder</HeaderLink>
            </NavLink>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
