import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import TreeHouseMain from "./Components/TreeHouse/TreeHouseMail";
import { blue, lime, yellow } from "@mui/material/colors";
import TechnoApp from "./Components/TechnoTask/TechnoApp";

function App() {
  return (
    <div className="App">
      {/* <TreeHouseMain /> */}
      <TechnoApp />
    </div>
  );
}

export default App;
