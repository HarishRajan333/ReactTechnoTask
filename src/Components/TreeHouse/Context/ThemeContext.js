import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const colorModeContext = createContext();

const Theme = ({ children }) => {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    setMode((prev) => (prev == "light" ? "dark" : "light"));
  };

  const typographySize = {
    xs: "13px",
    sm: "15px",
    md: "16px",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#00d982",
        contrastText: "#00d982",
      },
      secondary: {
        main: "#ffffff",
      },
      error: {
        main: "#e57373",
      },
      warning: {
        main: "#ffb74d",
      },
      info: {
        main: "#81c784",
      },
      formHead: {
        main: "#5e7992",
      },
      background: {
        default: "#00d079",
      },
    },
    typography: {
      h3: {
        color: "#ffffff",
      },
      h6: {
        color: "#ffffff",
      },
      poster: {
        fontSize: "18px",
        color: "#00d982",
        "@media (max-width:600px)": {
          fontSize: typographySize.xs,
        },
      },
      options: {
        fontSize: typographySize.md,
        color: "#5e7992",
        "&:hover": {
          fontSize: "17px",
          color: "#00d982",
        },
      },
      freeTrail: {
        fontSize: typographySize.md,
        color: "#00d982",
        marginLeft: "1vw",
        marginRight: "1vw",
        "&:hover": {
          fontSize: "17px",
          marginLeft: "1vw",
          marginRight: "1vw",
        },
        "@media (max-width:600px)": {
          fontSize: typographySize.xs,
        },
      },
      optionsHead: {
        fontSize: typographySize.md,
        color: "#ffffff",
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#e57373",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#ffffff",
      },
      error: {
        main: "#00d982",
      },
      warning: {
        main: "#ffb74d",
      },
      info: {
        main: "#81c784",
      },
      custom: {
        main: "#ffb73d",
      },
      background: {
        default: "#0e0e0e",
      },
    },
  });

  return (
    <colorModeContext.Provider value={{ changeMode }}>
      <ThemeProvider theme={mode == "light" ? theme : darkTheme}>
        {children}
      </ThemeProvider>
    </colorModeContext.Provider>
  );
};

export default Theme;
