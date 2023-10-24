import { useTheme } from "@mui/material/styles";
import TreeHouse from "./TreeHouse";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Dashboard = () => {
  const theme = useTheme();

  const style = {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
    with: "100vw",
  };

  const appOptions = [
    { id: 1, text: "Download", route: "download" },
    { id: 2, text: "Sign In", route: "sign-in" },
  ];

  const freeTrail = {
    text: "Free Trail",
    route: "free-trail",
  };

  return (
    <Grid sx={style}>
      <AppBar position="static" color="secondary">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100vw",
            alignItems: "center",
            height: "10vh",
          }}
        >
          <IconButton
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
            }}
            color="formHead"
          >
            <Menu />
          </IconButton>
          <Typography
            variant="poster"
            sx={{ display: { xs: "none", sm: "block", md: "block" } }}
          >
            treehouse
          </Typography>
          <Grid flexShrink={1} />
          <Grid sx={{ display: "flex" }}>
            {appOptions.map((app) => (
              <Typography
                variant="options"
                sx={{
                  mx: "1vw",
                  display: { md: "flex", sm: "flex", xs: "none" },
                }}
                key={app.id}
              >
                {app.text}
              </Typography>
            ))}
            <Typography variant="freeTrail">{freeTrail.text}</Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <TreeHouse />
    </Grid>
  );
};

export default Dashboard;
