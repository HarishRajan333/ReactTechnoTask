import { Grid } from "@mui/material";
import { useEffect } from "react";
import { getShopByConsern } from "../Service/Services";

const ShopByConsern = () => {
  useEffect(() => {
    getShopByConsern().then((resp) => {
      console.log(resp);
    });
  }, []);

  return (
    <Grid
      container
      spacing={3}
      direction={"column"}
      sx={{ p: 7, width: "100vw" }}
    ></Grid>
  );
};

export default ShopByConsern;
