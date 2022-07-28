import { NavLink as RouterNavLink } from "react-router-dom";
import { HeaderLink } from "./StyledComponents";

export default function NavLink({ route, label }) {
  function styleByActiveStatus(isActive) {
    return isActive
      ? { fontWeight: "bold", textDecoration: "none" }
      : { fontWeight: "normal", textDecoration: "none" };
  }

  return (
    <RouterNavLink
      to={route}
      style={({ isActive }) => styleByActiveStatus(isActive)}
    >
      <HeaderLink>{label}</HeaderLink>
    </RouterNavLink>
  );
}
