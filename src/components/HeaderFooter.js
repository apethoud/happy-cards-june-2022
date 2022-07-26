import { AppBackground, FooterCopyright } from "./StyledComponents";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";

export default function HeaderFooter(props) {
  return (
    <AppBackground>
      <AppHeader />
      <div style={{ padding: 40 }}>
        <Outlet />
      </div>
      <FooterCopyright>&copy; 2022 Andrew Pethoud</FooterCopyright>
    </AppBackground>
  );
}
