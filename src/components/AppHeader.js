import NavLink from "./NavLink";
import { HeaderColorBar, HeaderLogo } from "./StyledComponents";
import ThemeToggle from "./ThemeToggle";

export default function AppHeader() {
  return (
    <>
      <HeaderColorBar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <HeaderLogo>HappyCards</HeaderLogo>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <NavLink route="/" label="Home" />
            <NavLink route="card-builder" label="Card Builder" />
            <NavLink route="login" label="Login" />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
