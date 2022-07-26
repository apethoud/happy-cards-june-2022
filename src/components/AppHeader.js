import { NavLink } from "react-router-dom";
import { HeaderColorBar, HeaderLogo, HeaderLink } from "./StyledComponents";
import ThemeToggle from "./ThemeToggle";

export default function AppHeader() {
  return (
    <>
      <HeaderColorBar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <HeaderLogo>HappyCards</HeaderLogo>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <HeaderLink>Home</HeaderLink>
            </NavLink>
            <NavLink to="/card-builder" style={{ textDecoration: "none" }}>
              <HeaderLink>Card Builder</HeaderLink>
            </NavLink>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
