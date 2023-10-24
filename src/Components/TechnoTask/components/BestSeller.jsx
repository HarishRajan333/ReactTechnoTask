import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getBestSeller } from "../Service/Services";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    getBestSeller().then((resp) => {
      if (resp.success == true) {
        setBestSeller(resp?.best_sellers);
      }
    });
  }, []);

  return (
    <Grid
      container
      spacing={3}
      direction={"column"}
      sx={{ p: 7, width: "100vw" }}
    >
      <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "black" }}>
          Best Sellers
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ px: 4, borderRadius: "100px" }}
        >
          VIEW ALL
        </Button>
      </Grid>
      <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid container spacing={2}>
          {bestSeller.map((seller) => (
            <Grid item md={3} sm={4} xs={12}>
              <Card
                variant="elevation"
                sx={{
                  height: "420px",
                }}
              >
                <CardContent>
                  <img src="product.png" width={"100%"} />
                  <Typography variant="body2">
                    {seller?.product_name}
                  </Typography>
                  <Typography variant="caption">
                    Catoegry : {seller?.category[0]?.category_name}
                  </Typography>
                  {/* <Typography variant="body2" sx={{ overflowY: "hidden" }}>
                    {seller?.product_desc}
                  </Typography> */}
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      my: 1,
                    }}
                  >
                    <img src="Vector.png" />
                    <Typography variant="caption">
                      {seller?.avg_rating} |{" "}
                    </Typography>
                    <img src="mess.png" />

                    <Typography variant="caption">{` ${seller?.num_of_customer_buy} Reviews`}</Typography>
                  </Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography>${seller?.sales_price}.00</Typography>
                  </Grid>

                </CardContent>
                <CardActions>
                  <Button variant="outlined" fullWidth color="error">
                    ADD TO CART
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BestSeller;
