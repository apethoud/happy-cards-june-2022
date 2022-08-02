import NavLink from "./NavLink";
import { HeaderColorBar, HeaderLogo } from "./StyledComponents";
import ThemeToggle from "./ThemeToggle";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function AppHeader() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <HeaderColorBar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <HeaderLogo>HappyCards</HeaderLogo>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <NavLink route="/" label="Home" />
            <NavLink route="card-builder" label="Card Builder" />
            {!loggedInUser ? (
              <NavLink route="login" label="Login" />
            ) : (
              <NavLink route="profile" label="Profile" />
            )}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
