import { Button, Grid, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { colorModeContext } from "../Context/ThemeContext";

const TreeHouse = () => {
  const theme = useTheme();
  const { changeMode } = useContext(colorModeContext);

  return (
    <>
      <Grid container>
        <Grid
          item
          container
          spacing={3}
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "90vh",
            justifyContent: "center",
            px: { md: "5vw" },
          }}
        >
          <Grid item>
            <Typography variant="h3" textAlign={"left"}>
              Learn Web Design, Coding & Much More
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" textAlign={"left"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              quod aliquam modi delectus nam voluptatibus dolores exercitationem
              nihil, ullam, ut libero deleniti sequi sunt in neque tenetur ipsum
              consequatur nisi.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          spacing={1}
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { md: "5vw" },
          }}
        >
          <Grid
            item
            sx={{
              height: "6vh",
              backgroundColor: "#5e7992",
              borderRadius: "4px",
            }}
          >
            <Typography variant="optionsHead">
              Try it free for 7 days
            </Typography>
          </Grid>
          <Grid
            container
            sx={{
              backgroundColor: "white",
            }}
          >
            <Grid item md={6} sm={6} xs={12} p={2}>
              <Typography variant="options" sx={{ textAlign: "center" }}>
                First name
              </Typography>
              <Grid height={"4px"} />
              <TextField size="small" />
            </Grid>
            <Grid item md={6} sm={6} xs={12} p={2}>
              <Typography variant="options" sx={{ textAlign: "center" }}>
                Last name
              </Typography>
              <Grid height={"4px"} />
              <TextField size="small" />
            </Grid>
            <Grid item md={6} sm={6} xs={12} p={2}>
              <Typography variant="options" sx={{ textAlign: "center" }}>
                Email Address
              </Typography>
              <Grid height={"4px"} />
              <TextField size="small" />
            </Grid>
            <Grid item md={6} sm={6} xs={12} p={2}>
              <Typography variant="options" sx={{ textAlign: "center" }}>
                Password
              </Typography>
              <Grid height={"4px"} />
              <TextField size="small" />
            </Grid>
            <Grid item md={12} sm={12} xs={12} py={5} px={3}>
              <Button variant="contained" sx={{ color: "white" }} fullWidth>
                Create Your Free Trail.
              </Button>
              <Typography variant="subtitle2" sx={{ py: 1, textAlign: "left" }}>
                Lorem ipsum dolor sit amet{" "}
                <span style={{ color: "skyblue" }}>
                  consectetur, adipisicing elit.{" "}
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TreeHouse;
