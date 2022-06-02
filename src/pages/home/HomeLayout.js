import { styled } from "@mui/system";
import { Outlet } from "react-router-dom";
import CommandPallete from "../../components/_commandPallete/CommandPallete";
import BottomNav from "../../components/_nav/BottomNav";
import NavBar from "../../components/_nav/NavBar";

// const APP_BAR_MOBILE = 10;
// const APP_BAR_DESKTOP = 10;

const RootStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  overflow: "hidden",
  backgroundColor: "#f5f5f5",
  height: "100vh",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  // paddingTop: APP_BAR_MOBILE + 0,
  paddingBottom: theme.spacing(10),
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),
  [theme.breakpoints.up("lg")]: {
    // paddingTop: APP_BAR_DESKTOP + 0,
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
}));

const HomeLayout = () => {
  return (
    <RootStyle className="!transition-all !ease-in-out">
      {/* here we can add a navigation */}
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>
      <CommandPallete />
      <MainStyle>
        <Outlet />
      </MainStyle>
      <header className="h-full w-full lg:hidden">
        <BottomNav />
      </header>
    </RootStyle>
  );
};

export default HomeLayout;
