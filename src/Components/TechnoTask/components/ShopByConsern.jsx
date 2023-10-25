import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getShopByConsern } from "../Service/Services";

const ShopByConsern = () => {
  const [shopByCon, setShopByCon] = useState([]);
  const [conInitialValue, setConInitialValue] = useState(1);
  const [shopByConDatas, setShopByConDatas] = useState([]);

  useEffect(() => {
    getShopByConsern().then((resp) => {
      console.log(resp);
      if (resp.success == true) {
        setShopByCon(resp?.shop_by_concern);
        setConInitialValue(resp?.shop_by_concern[0]?.id);
        setShopByConDatas(resp?.shop_by_concern[0]?.concerns);
      }
    });
  }, []);

  const changeConsern = (e, value) => {
    setConInitialValue(value);
    shopByCon
      .filter((con) => con?.id == value)
      .map((c) => setShopByConDatas(c?.concerns));
  };

  return (
    <Grid
      container
      spacing={3}
      direction={"column"}
      sx={{ p: 7, width: "100vw" }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Shop By Concern
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          We provide Problem faced
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          solution
        </Typography>
      </Grid>
      <Grid item>
        <Tabs
          value={conInitialValue}
          onChange={(e, value) => changeConsern(e, value)}
          variant="standard"
          TabIndicatorProps={{
            style: {
              backgroundColor: "green",
            },
          }}
          centered
        >
          {shopByCon.map((con) => (
            <Tab key={con?.id} value={con?.id} label={con?.category_name} />
          ))}
        </Tabs>
      </Grid>
      <br />
      <Grid item sx={{ display: "flex", justifyContent: "center", px: "8vw" }}>
        {shopByConDatas.map((conData) => (
          <Grid
            sx={{
              height: "170px",
              width: "170px",
              p: 1,
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "100px",
                width: "100px",
                border: "1px solid red",
                borderRadius: "50%",
                p: 1,
              }}
            >
              <img
                src={conData?.concern_image_url}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ my: 1, textTransform: "lowercase" }}
            >
              {conData?.concern_name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ShopByConsern;
