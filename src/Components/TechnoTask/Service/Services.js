import axios from "axios";
import md5 from "crypto-js/md5";

const baseUrl = "https://dev.lakshmikrishnanaturals.com/admin/api/v1/";

const salt = "LK@$$$@2022";

export const getWeb = async () => {
  let response = await axios.post(baseUrl + "banners", {
    auth_token: md5(salt + "WEB").toString(),
    banner_type: "WEB",
  });
  return response.data;
};

export const getBestSeller = async () => {
  let response = await axios.post(baseUrl + "best_seller", {
    auth_token: md5(salt + "BEST").toString(),
    user_id: 1,
  });
  return response.data;
};

export const getShopByConsern = async () => {
  let response = await axios.post(baseUrl + "shop_by_concern", {
    auth_token: md5(salt + "BEST").toString(),
  });
  return response.data;
};
