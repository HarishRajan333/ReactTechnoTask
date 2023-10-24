import Dashboard from "./Components/Dashboard";
import TreeHouse from "./Components/TreeHouse";
import Theme from "./Context/ThemeContext";
// import { useTheme } from "@mui/material/styles";

const Main = () => {
  //   const theme = useTheme();

  return (
    <>
      <Theme>
        {/* {theme.palette.background.default} */}
        <Dashboard />
      </Theme>
    </>
  );
};

export default Main;
