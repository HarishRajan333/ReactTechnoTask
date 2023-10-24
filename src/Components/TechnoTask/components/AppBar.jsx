import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Badge,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Language } from "@mui/icons-material";

const AppBarTechno = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#ffffff" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <img src="cropped-logo1 2.png" />
          <Grid sx={{ display: "flex" }}>
            <TextField
              variant="outlined"
              size="small"
              label="Search Product"
              InputProps={{
                style: {
                  borderTopLeftRadius: "25px",
                  paddingLeft: "10px",
                  borderBottomLeftRadius: "25px",
                },
              }}
            />
            <Button
              sx={{
                bgcolor: "#db3022",
                borderBottomRightRadius: "25px",
                borderTopRightRadius: "25px",
                color: "#ffffff",
              }}
              startIcon={<SearchIcon />}
            />
          </Grid>
          <Grid sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body2" sx={{ color: "black" }}>
              REGISTER / LOGIN
            </Typography>
            <IconButton>
              <Badge badgeContent={2} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={2} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Toolbar>
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", mx: "8vw" }}
        >
          <Grid spacing={2} sx={{ display: "flex", alignItems: "center" }}>
            <FormControl
              size="small"
              sx={{
                minWidth: "200px",
                bgcolor: "#db3022",
                color: "white",
                mx: 1,
              }}
            >
              <InputLabel sx={{ color: "white" }}>All Categories</InputLabel>
              <Select
                label="All Categories"
                IconComponent={() => <ArrowDropDownIcon htmlColor="white" />}
              >
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="body2" sx={{ color: "#db3022", mx: 1 }}>
              Home
            </Typography>
            <Typography variant="body2" sx={{ mx: 1, color: "black" }}>
              Shop
            </Typography>
            <Typography variant="body2" sx={{ mx: 1, color: "black" }}>
              About us
            </Typography>
            <Typography variant="body2" sx={{ mx: 1, color: "black" }}>
              Contact us
            </Typography>
            <Typography variant="body2" sx={{ mx: 1, color: "black" }}>
              Blog
            </Typography>
          </Grid>

          <Grid sx={{ display: "flex" }}>
            <img src="icon-phone 2.png" />
            <Grid sx={{ mx: 1 }}>
              <Typography variant="body2" sx={{ mx: 1, color: "black" }}>
                +91 79046 97609
              </Typography>
              <Typography variant="body2" sx={{ mx: 1, color: "black" }}>
                Customer Support
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarTechno;
